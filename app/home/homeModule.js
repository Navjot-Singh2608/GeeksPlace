angular.module('home', [
    'ui.router',
    'toastr',
    'ui.bootstrap'
])
    .config(function($stateProvider,$urlRouterProvider,$locationProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/views/home.html',
                controller:'homeCtrl'
            });
        $locationProvider.html5Mode(true);
    });



