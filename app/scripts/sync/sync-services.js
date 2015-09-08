(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');

        var syncService = function() {
            var service = {
                getContent: getContent
            };
            return service;

            function getContent() {
                return 'Welcome to Sync';
            }
        };

        syncService.id = 'syncService';

        //ADD Dependency Injection if needed

        angular.module('sync').service(syncService.id, syncService);
    });
}());
