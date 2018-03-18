angular.module('expert')
    .controller('expertCtrl', ['$scope','$state','$rootScope',function($scope,$state,$rootScope){
        $scope.fullName = $rootScope.fullName;
        $scope.userChannelName = $rootScope.userChannelName;
        $scope.changeChannel = '';


        $scope.pageAskQuestion = function(selectedTopic){
        $rootScope.pageType = "group";
        $rootScope.channelGroup = true;
        $rootScope.channelName = selectedTopic;
        $state.go("askquestion",{reload: true});
    }



    /*$scope.$watch('channelName', function() {
        MessageService.channel = $rootScope.channelName ;
    });*/

    $scope.userChannel = function () {
        var userName = $scope.userChannelName;
        $rootScope.pageType = "user";
        $rootScope.channelName = userName;
        $rootScope.channelGroup = false;
        $rootScope.userRequest = true;
        $state.go("askquestion",{reload: true});
    }


}])

