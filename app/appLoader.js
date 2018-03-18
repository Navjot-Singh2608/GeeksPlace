(function () {
    var envDevelopment = false;
    var version = envDevelopment ? (new Date()).getTime() : '1.15.0';

    var initialDependencies = [
        'jquery',
        'angular',
        'angularAnimate',
        'angularTouch',
        'angularCookies',
        'angularSanitize',
        'shared/jsencrypt',
        'otherDependencies',
        'rzslider',
        'appConfig',
        'coreModule',
        'translationsModule'
    ];
    var highchartDependencies = [
        'highchartsMain',
        'highchartsMore',
        'highchartsMap',
        'highchartsTreemap',
        'highchartsExporting',
        'highchartsNoData'
    ];
    var otherDependencies = [
        'uiBootstrap',
        'uiRouter',
        'stopEvent',
        'progressBar',
        'customControl',
        'loadingBar',
        'localStorage',
        'layoutSpliiter',
        'uiTabScroll',
        'uiSelect',
        'inputValidator',
        'fileUpload'
    ];

    var fileUploaderDependencies = [
        'fileUploadShim',
        'fileUploadMain'
    ]

    var rzsliderDependencies = ['rzslidermain'];

    var gridstackDependencies = [
        'gridstackmain',
        'gridstackAngular'
    ];

    var coreModuleDependencies = [
        'core'
    ];

    var translationsModuleDependencies = [
        'translations'
    ];

    var homeModuleDependencies = [
        'home'
    ];

    var dashboardMgtModuleDependencies = [
        'dashboardMgt'
    ];

    var databaseModuleDependencies = [
        'database'
    ];

    var mediaFilesModuleDependencies = [
        'mediaFiles'
    ];

    var dashboardModuleDependencies = [
        'dashboard'
    ];

    var designModuleDependencies = [
        'design'
    ];

    var previewModuleDependencies = [
        'preview'
    ];

    var publishModuleDependencies = [
        'publish'
    ];

    var embedModuleDependencies = [
        'embed'
    ];

    var exploreModuleDependencies = [
        'explore'
    ];

    var userMgmtModuleDependencies = [
        'userMgmt'
    ];

    // var agGridDependencies = ['agGridMain'];

    requirejs.config({
        waitSeconds: 0,
        urlArgs: "v=" + version,
        paths: {
            lodash: 'shared/lodash/lodash.min',
            jquery: 'shared/jquery/jquery.min',
            jqueryui: 'shared/jquery-ui/jquery-ui.min',
            'jquery-ui': 'shared/jquery-ui/ui',
            angular: 'shared/angularJS/angular.min',
            angularAnimate: 'shared/angularJS/angular-animate.min',
            angularTouch: 'shared/angularJS/angular-touch.min',
            angularCookies: 'shared/angularJS/angular-cookies.min',
            angularSanitize: 'shared/angularJS/angular-sanitize.min',
            highchartsMain: 'shared/highcharts/highcharts',
            highchartsMore: 'shared/highcharts/highcharts-more',
            highchartsMap: 'shared/highcharts/modules/map',
            highchartsTreemap: 'shared/highcharts/modules/treemap',
            highchartsExporting: 'shared/highcharts/modules/exporting',
            highchartsNoData: 'shared/highcharts/modules/no-data-to-display',
            sunburst: 'shared/sunburst/sunburst',
            rzslidermain: 'shared/angularSlider/rzslider.min',
            uiBootstrap: 'shared/uiBootstrap/ui-bootstrap.min',
            uiRouter: 'shared/uiRouter/angular-ui-router.min',
            stopEvent: 'shared/stopEvent/stop-event',
            fileUploadShim: 'shared/ngFileUpload/ng-file-upload-shim.min',
            fileUploadMain: 'shared/ngFileUpload/ng-file-upload.min',
            progressBar: 'shared/ngProgressBar/ng-progress-bar',
            customControl: 'shared/dfaCustomControls/custom-controls',
            loadingBar: 'shared/loadingBar/loading-bar',
            localStorage: 'shared/angularLocalStorage/angular-local-storage',
            layoutSpliiter: 'shared/ngLayoutSplitter/ng-layout-splitter',
            uiTabScroll: 'shared/angularUITabScroll/angular-ui-tab-scroll',
            uiSelect: 'shared/uiSelect/select',
            inputValidator: 'shared/validator/input-validator',
            ngDraggable: 'shared/ngDraggable/ngDraggable',
            gridstackmain: 'shared/gridstack/gridstack',
            gridstackAngular: 'shared/gridstackAngular/gridstack-angular.min',
            dfaHighcharts: 'shared/dfaHighcharts/dfa-highcharts',
            core: 'components/core/core.min',
            translations: 'components/translations/translations.min',
            home: 'components/home/home.min',
            dashboardMgt: 'components/dashboardMgt/dashboardMgt.min',
            database: 'components/database/database.min',
            mediaFiles: 'components/mediaFiles/mediaFiles.min',
            dashboard: 'components/dashboard/dashboard.min',
            design: 'components/design/design.min',
            preview: 'components/preview/preview.min',
            publish: 'components/publish/publish.min',
            embed: 'components/embed/embed.min',
            explore: 'components/explore/explore.min',
            userMgmt: 'components/userMgmt/userMgmt.min',
            colorPicker: 'shared/colorPicker/ui.bootstrap.materialPicker',
            agGrid: 'shared/agGrid/ag-grid-enterprise.min'
        },
        shim: {
            jqueryui: {
                deps: ['jquery']
            },
            angular: {
                deps: ['jquery'],
                exports: 'angular'
            },
            angularAnimate: {
                deps: ['angular']
            },
            angularTouch: {
                deps: ['angular']
            },
            angularCookies: {
                deps: ['angular']
            },
            angularSanitize: {
                deps: ['angular']
            },
            highchartsMore: {
                deps: ['highchartsMain']
            },
            highchartsMap: {
                deps: ['highchartsMain']
            },
            highchartsTreemap: {
                deps: ['highchartsMain']
            },
            highchartsExporting: {
                deps: ['highchartsMain']
            },
            highchartsNoData: {
                deps: ['highchartsMain']
            },
            sunburst: {
                deps: ['shared/d3/d3.min']
            },
            rzslider: {
                deps: ['angular']
            },
            uiBootstrap: {
                deps: ['angular']
            },
            stopEvent: {
                deps: ['angular']
            },
            fileUploadMain: {
                deps: ['angular', 'fileUploadShim']
            },
            progressBar: {
                deps: ['angular']
            },
            loadingBar: {
                deps: ['angular']
            },
            layoutSpliiter: {
                deps: ['angular']
            },
            uiRouter: {
                deps: ['angular']
            },
            localStorage: {
                deps: ['angular']
            },
            uiTabScroll: {
                deps: ['angular']
            },
            customControl: {
                deps: ['angular']
            },
            inputValidator: {
                deps: ['angular']
            },
            ngDraggable: {
                deps: ['angular']
            },
            uiSelect: {
                deps: ['angular']
            },
            gridstackmain: {
                deps: ['jquery', 'jqueryui']
            },
            gridstackAngular: {
                deps: ['gridstackmain', 'angular']
            },
            dfaHighcharts: {
                deps: ['angular', 'highcharts', 'sunburst']
            },
            appConfig: {
                deps: ['otherDependencies']
            },
            core: {
                deps: ['angular', 'appConfig']
            },
            translations: {
                deps: ['core', 'fileUpload']
            },
            dashboardMgt: {
                deps: ['fileUpload', 'home']
            },
            mediaFiles: {
                deps: ['fileUpload']
            },
            design: {
                deps: ['gridstack', 'dfaHighcharts', 'ngDraggable', 'colorPicker', 'agGrid']
            },
            preview: {
                deps: ['dfaHighcharts','highcharts', 'agGrid']
            },
            publish: {
                deps: ['dfaHighcharts', 'fileUpload', 'colorPicker']
            },
            agGrid: {
                deps: ['angular'],
                exports: 'agGrid'
            }
        }
    })

    define('coreModule', coreModuleDependencies);

    define('rzslider', rzsliderDependencies);

    define('gridstack', gridstackDependencies);

    define('otherDependencies', otherDependencies);

    define("highcharts", highchartDependencies);

    define('translationsModule', translationsModuleDependencies);

    define('homeModule', homeModuleDependencies);

    define('dashboardMgtModule', dashboardMgtModuleDependencies);

    define('databaseModule', databaseModuleDependencies);

    define('mediaFilesModule', mediaFilesModuleDependencies);

    define('dashboardModule', dashboardModuleDependencies);

    define('designModule', designModuleDependencies);

    define('previewModule', previewModuleDependencies);

    define('publishModule', publishModuleDependencies);

    define('embedModule', embedModuleDependencies);

    define('exploreModule', exploreModuleDependencies);

    define('userMgmtModule', userMgmtModuleDependencies);

    define('fileUpload', fileUploaderDependencies)

    // define('agGrid', agGridDependencies);

    requirejs(initialDependencies, function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, [appConfig.appName]);
        });
    })
})()
