angular.module('myProfile', [
    'ui.router',
    'toastr',
    'file-model',
    'ui.bootstrap'
])
    .config(function($stateProvider,$urlRouterProvider,$locationProvider) {

        $stateProvider
            .state('myProfile', {
                url: '/myProfile',
                cache: false,
                templateUrl: 'app/profile/views/myProfile.html',
                controller:'profileCtrl'
            });
        $locationProvider.html5Mode(true);
    });


