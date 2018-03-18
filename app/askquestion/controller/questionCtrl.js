angular.module('askquestion').controller('questionCtrl',['$scope','$rootScope','$state','MessageService',function ($scope,$rootScope,$state,MessageService){
    $scope.language = "Select Language";
    $scope.messagesend = '';
    $rootScope.changeChannel = $rootScope.channelName;
    $scope.names = ['java','android','Angularjs','C','C++'];


    $scope.messagestatus = function(){
      $scope.messageStatus = "fail";
    }

    $scope.selectedLanguage = function(language){
        $scope.language = language;
        $scope.messageStatus = "success";
        $rootScope.channelName = language;
        console.log(language);
    }


    /*Method to provide the answer to the required user in group chat*/
    $rootScope.provideAnswer = function(message,userData){
        var user = {};
        user.messageContent = message;
        user.userName = userData.content.userName;
        user.senderName = $rootScope.fullName;
        user.messageId = Math.floor(100000 + Math.random() * 900000);
        user.deleted = false;
        user.channelGroup = false;
        user.userRequest = false;
        user.userchannelName = userData.content.userchannelName;
        user.userPicName = $rootScope.userPicName;
        MessageService.sendMessage(user);
        $scope.user.messageContent = '';
    
    }

    $scope.myProfile = function(){
        $state.go("myProfile");
    }


}])

