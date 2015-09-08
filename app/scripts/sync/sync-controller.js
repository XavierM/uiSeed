(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');

        var syncController = function(syncSrv) {
            var vm = this;
            vm.getContent = syncSrv.getContent;

            return vm;
        };

        syncController.id = 'syncController';

        syncController.nameAs = 'syncCtrl';

        //ADD Dependency Injection if needed
        syncController.$inject = ['syncService'];

        angular.module('sync').controller(syncController.id, syncController);
    });
}());
