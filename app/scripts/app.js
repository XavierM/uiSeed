(function() {
    'use strict';

    define(function(require) {

        var angular = require('angular'),
            e3HeaderMod = require('e3Header/e3Header-module'),
            syncMod = require('sync/sync-module');

        require('ui-router');

        var app = angular.module('e3_UI_Seed', [
            e3HeaderMod.name,
            syncMod.name,
            'ui.router'
        ]);

        var appConfig = function($stateProvider, $urlRouterProvider) {

            var appState = {
                url:'/',
                abstract:true,
                views: {
                    '@': {
                        template: '<div ui-view></div>'
                    },
                    'header@': {
                        template:e3HeaderMod.mainTemplate,
                        controller: e3HeaderMod.controllerName,
                        controllerAs: e3HeaderMod.controllerNameAs
                    }
                }
            };

             $stateProvider.state('root', appState);

             $urlRouterProvider.otherwise('/e3Intake/sync');
        };
         appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

         app.config(appConfig);

        return app;
    });
}());
