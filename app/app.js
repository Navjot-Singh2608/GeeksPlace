(function () {
'use strict';
angular.module('app', [
    'ui.router',
    'home',
    'myProfile',
    'expert',
    'groups',
    'layout',
    'askquestion',
    'pubnub.angular.service',
    'ngNotify',
    'ui.bootstrap'

])


.controller('mainCtrl',['$scope','$state',function($scope,$state){
    $scope.askExpert = function(){
        $state.go("expert");
    }
}])


.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);

})

})();







