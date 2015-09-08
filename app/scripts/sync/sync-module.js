(function() {
    'use strict';

    define(function(require) {

        var angular = require('angular'),
            syncTpl = require('text!sync/html/sync.html');

        require('ui-router');
        require('ocLazyLoad');

        var syncModule = angular.module('sync', ['ui.router', 'oc.lazyLoad']);

        var syncConfig = function($stateProvider, $urlRouterProvider) {

            var syncState = {
                url: 'e3Intake/sync',
                template: syncTpl,
                parent:'root',
                resolve: {
                    syncCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'sync',
                            files:['scripts/sync/sync-controller.js']
                        });
                    }],
                    syncSrv: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'sync',
                            files:['scripts/sync/sync-services.js']
                        });
                    }]
                },
                controller: 'syncController',
                controllerAs: 'syncCtrl'
            };

            $stateProvider.state('sync', syncState);

            $urlRouterProvider.otherwise('/e3Intake/sync');
        };
        syncConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

        syncModule.config(syncConfig);

        return syncModule;
    });
}());
