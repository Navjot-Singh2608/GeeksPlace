angular.module('groups', [
    'ui.router','pubnub.angular.service', 'ngNotify'
    /* 'ngLoadScript'*/
])
    .config(function($stateProvider,$urlRouterProvider,$locationProvider) {

        $stateProvider
            .state('groups', {
                url: '/groups',
                cache: false,
                templateUrl: 'app/groups/views/groups.html',
                controller:'expertCtrl'
            });
        $locationProvider.html5Mode(true);
    });



