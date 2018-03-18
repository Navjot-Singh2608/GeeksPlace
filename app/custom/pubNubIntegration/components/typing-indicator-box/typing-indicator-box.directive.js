angular.module('app').directive('typingIndicatorBox', function($rootScope, TypingIndicatorService) {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'app/custom/pubNubIntegration/components/typing-indicator-box/typing-indicator-box.html',

    controller: function($scope){
      
      $scope.usersTyping = TypingIndicatorService.getUsersTyping();

    }
  };
});