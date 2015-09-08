(function() {
    'use strict';

    define(function(require) {

        require('e3Header/e3Header-service');

        var e3HeaderController = function(e3HeaderService) {
            var vm = this;
            vm.getContent = e3HeaderService.getContent;
            vm.testFunction = testFunction;

            function testFunction() {
                return 'test';
            }

            return vm;
        };

        e3HeaderController.id = 'e3HeaderController';

        e3HeaderController.nameAs = 'e3HeaderCtrl';

        // ADD Dependency Injection if needed
        e3HeaderController.$inject = ['e3HeaderService'];

        return e3HeaderController;
    });
}());
