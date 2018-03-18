angular.module('app')
.factory('MessageService', ['$rootScope', '$q', 'Pubnub','currentUser', 'ngNotify',
 function MessageServiceFactory($rootScope, $q, Pubnub, currentUser, ngNotify) {
  
  // Aliasing this by self so we can access to this trough self in the inner functions
  var self = this;
  console.log(self);
  this.messages = [];
  this.channel = $rootScope.channelName;
  


  // We keep track of the timetoken of the first message of the array
  // so it will be easier to fetch the previous messages later
  this.firstMessageTimeToken = null;
  this.messagesAllFetched = false;
     
  var addChannel = function(){
      self.messages = [];
      populate();
      /*MessageServiceFactory($rootScope, $q, Pubnub, currentUser, ngNotify);*/
  }


   var whenDisconnected = function(){
      ngNotify.set('Connection lost. Trying to reconnect...', {
        type: 'warn',
        sticky: true,
        button: false
      });
  };

  var whenReconnected = function(){
      ngNotify.set('Connection re-established.', {
          type: 'info',
          duration: 1500
      });
  };

  var init = function() {
      
      Pubnub.subscribe({
          channel: $rootScope.channelName,
          disconnect : whenDisconnected, 
          reconnect : whenReconnected,
          noheresync: true, 
          triggerEvents: true
      });

      Pubnub.time(function(time){
        self.firstMessageTimeToken = time;
      })

      subcribeNewMessage(function(ngEvent,m){
        self.messages.push(m)
        $rootScope.$digest()
  });

  };

  var populate = function(){

    var defaultMessagesNumber = 20;

    Pubnub.history({
     channel: $rootScope.channelName,
     callback: function(m){
        // Update the timetoken of the first message
        self.timeTokenFirstMessage = m[1]
        angular.extend(self.messages, m[0]);  
        
        if(m[0].length < defaultMessagesNumber){
          self.messagesAllFetched = true;
        }

        $rootScope.$digest()
        $rootScope.$emit('factory:message:populated')
        
     },
     count: defaultMessagesNumber, 
     reverse: false
    });

  };

  ////////////////// PUBLIC API ////////////////////////

  var subcribeNewMessage = function(callback){
    $rootScope.$on(Pubnub.getMessageEventNameFor($rootScope.channelName), callback);
  };


  var fetchPreviousMessages = function(){

    var defaultMessagesNumber = 10;

    var deferred = $q.defer()

    Pubnub.history({
     channel: self.channel,
     callback: function(m){
        // Update the timetoken of the first message
        self.timeTokenFirstMessage = m[1]
        Array.prototype.unshift.apply(self.messages,m[0])
        
        if(m[0].length < defaultMessagesNumber){
          self.messagesAllFetched = true;
        }

        $rootScope.$digest()
        deferred.resolve(m)

     },
     error: function(m){
        deferred.reject(m)
     },
     count: defaultMessagesNumber, 
     start: self.timeTokenFirstMessage,
     reverse: false
    });

    return deferred.promise
  };

   

  var getMessages = function() {
    if (_.isEmpty(self.messages))
      populate();

    return self.messages;

  };

  var messagesAllFetched = function() {

    return self.messagesAllFetched;

  };


 var deleteMessages = function(messageContent,uuid,sender_uuid,date) {

         // Don't send an empty message
         if (_.isEmpty(messageContent))
             return;
         var channelName = '';
         if(messageContent.userRequest){
             /*In case of the user request*/
             channelName = $rootScope.channelName;
         }else{
             /*In case of the user response*/
             channelName = messageContent.userchannelName
         }

         Pubnub.publish({
             channel: channelName,
             message: {
                 message_id: messageContent.messageId,
                 channel: $rootScope.channelName,
                 user: messageContent.userName,
                 status: messageContent.messageContents,
                 usecase: "delete",
                 deleted: true
             },
         });
     };


     
     var sendMessage = function(messageContent) {

      // Don't send an empty message 
      if (_.isEmpty(messageContent))
          return;
      var channelName = '';
      if(messageContent.userRequest){
          /*In case of the user request*/
          channelName = $rootScope.channelName;
      }else{
          /*In case of the user response*/
          channelName = messageContent.userchannelName
      }

      Pubnub.publish({
          channel: channelName,
          message: {
              /*message_id: */
              uuid: (Date.now() + currentUser),
              message_id:messageContent.messageId,
              content: messageContent,
              usecase: "delete",
              sender_uuid: currentUser,
              date: Date.now()
          },
      });
  };


  init();

  // The public API interface
  return {
    addChannel: addChannel,
    deleteMessages: deleteMessages,
    getMessages: getMessages, 
    sendMessage: sendMessage,
    subscribeNewMessage: subcribeNewMessage,
    fetchPreviousMessages: fetchPreviousMessages,
    messagesAllFetched : messagesAllFetched,
  } 

}]);
