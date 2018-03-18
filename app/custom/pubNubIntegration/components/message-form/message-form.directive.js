angular.module('app').directive('messageForm', function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'app/custom/pubNubIntegration/components/message-form/message-form.html',
    scope: {
      language:'@',
      messagetext:'@',
      messagesend:'=',
      messagestatus:'&'
    },
    controller: function($scope, currentUser, MessageService,$rootScope){
      $scope.pageType = $rootScope.pageType;
      $scope.uuid = currentUser;
      $scope.messageContent = '';
      $scope.message = {};
      $scope.channelGroup = $rootScope.channelGroup;
      /*clear user chat*/
      $scope.clearChat = function(){
        console.log("clear user chat")
        var userChat = MessageService.getMessages();
        angular.forEach(userChat, function(value, key) {
          value.content.deleted = true;
          MessageService.deleteMessages(value.content,value.uuid,value.sender_uuid,value.date);
        });
       
      }


      $scope.sendMessage = function(messageContent){
         $scope.messageContent = $scope.message.content;
        if($scope.language == "Select Language"){
          $scope.messagesend= "fail";
          $scope.messagestatus()
        }else{
          $scope.user = {};
          $scope.user.messageContent = $scope.messageContent;
          $scope.user.messageId = Math.floor(100000 + Math.random() * 900000);
          $scope.user.userName = $rootScope.fullName;
          $scope.user.channelGroup = true;
          $scope.user.userchannelName = $rootScope.userChannelName;
          $scope.user.userRequest = $rootScope.userRequest;
          $scope.user.userPicName = $rootScope.userPicName;
          $scope.user.prodEdtToggle = '';
          $scope.user.file = $scope.file;
          MessageService.sendMessage($scope.user);
          $scope.messageContent = '';
          $scope.messagesend = "success";
        }
      }


      function readURL(input) {
        if (input.files && input.files[0]) {
          $scope.file = input.files[0];
          $scope.fileName = $scope.file.name;
          getBase64($scope.file);
        }
      }




      function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          $scope.file = reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }

      angular.element("#imgInp").change(function() {
        readURL(this);
      });

    }
  };
});