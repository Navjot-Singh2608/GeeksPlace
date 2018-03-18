    angular.module('layout', [
    'ui.router'
])
    .config(function($stateProvider,$urlRouterProvider,$locationProvider) {

        $stateProvider
            .state('navbar', {
                url: '/navbar',
                cache: false,
                templateUrl: 'app/layout/views/navigation.html',
                controller:'layoutCtrl'
            });
        $locationProvider.html5Mode(true);
    });



   

