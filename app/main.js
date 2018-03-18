

(function() {

    var appName = 'GeekPlace';
    var initialDependencies = [
        'jquery',
        'angular'
    ];

    require.config({


        paths: {
            'jquery': '../bower_components/jquery/dist/jquery.js',
            'angular': '../bower_components/angular/angular.js'
        },

        shim: {
            jquery: {
                deps: ['jquery']
            },
            angularjs: {
                deps: ['jquery'],
                exports: 'angular'
            },

            'coreModule': {
                deps: ['angular']
            }
        }

    })



    requirejs(initialDependencies, function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, [appName]);
        });
    })


})()