angular.module('askquestion', ['ui.router','pubnub.angular.service', 'ngNotify','ui.bootstrap'])
    .config(function($stateProvider,$urlRouterProvider,$locationProvider) {

        $stateProvider
            .state('askquestion', {
                url: '/askquestion',
                cache: false,
                templateUrl: 'app/askquestion/views/askquestion.html',
                controller:'questionCtrl'
            });
        $locationProvider.html5Mode(true);
    });





