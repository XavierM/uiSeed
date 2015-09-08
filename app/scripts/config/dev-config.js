require.config({
    baseUrl: 'scripts',

    paths: {
        'angular': '../lib/bower_components/angular/angular',
        'ui-router': '../lib/bower_components/angular-ui-router/release/angular-ui-router',
        'underscore': '../lib/bower_components/lodash/lodash',
        'log': 'logging/console-logger',
        'text': '../lib/bower_components/requirejs-text/text',
        'ocLazyLoad': '../lib/bower_components/oclazyload/dist/oclazyload.require',
        'restangular': '../lib/bower_components/dist/restangular'
    },
    shim: {
        'angular': { exports: 'angular' },
        'ui-router': { deps: ['angular'] },
        'ocLazyLoad':  { deps: ['angular'] },
        'restangular':  { deps: ['angular'] }
    }
});
