(function() {
    'use strict';

    define(function() {

        var headerService = function() {
            var service = {
                getContent: getContent
            };
            return service;

            function getContent() {
                return 'hello e3 Header';
            }

        };

        headerService.id = 'e3HeaderService';

        // ADD Dependency Injection if needed

        return headerService;
    });
}());
