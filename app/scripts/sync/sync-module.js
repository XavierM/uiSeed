(function() {
    'use strict';

    define(function(require) {

        var angular = require('angular'),
            syncCtrl = require('sync/sync-controller'),
            syncTpl = require('text!sync/html/sync.html');

        require('ui-router');

        var syncModule = angular.module('sync', ['ui.router']);

        syncModule.controller(syncCtrl.id, syncCtrl);

        var syncConfig = function($stateProvider, $urlRouterProvider) {

            var syncState = {
                url: 'e3Intake/sync',
                template: syncTpl,
                parent:'root',
                controller: syncCtrl.id,
                controllerAs: syncCtrl.nameAs
                /*,
                resolve: {
                }*/
            };

            $stateProvider.state('sync', syncState);

            $urlRouterProvider.otherwise('/e3Intake/sync');
        };
        syncConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

        syncModule.config(syncConfig);

        return syncModule;
    });
}());
