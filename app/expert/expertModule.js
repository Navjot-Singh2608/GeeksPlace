angular.module('expert', [
    'ui.router','pubnub.angular.service', 'ngNotify'
    /* 'ngLoadScript'*/
])
    .config(function($stateProvider,$urlRouterProvider,$locationProvider) {

        $stateProvider
            .state('expert', {
                url: '/expert',
                cache: false,
                templateUrl: 'app/expert/views/expert.html',
                controller:'expertCtrl'
            });
        $locationProvider.html5Mode(true);
    });



