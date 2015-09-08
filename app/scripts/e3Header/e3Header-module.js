(function() {
    'use strict';

    define(function(require) {

        var angular = require('angular'),
            e3HeaderCtrl = require('e3Header/e3Header-controller'),
            e3HeaderSvc = require('e3Header/e3Header-service'),
            e3HeaderTemp = require('text!e3Header/html/e3Header.html');

        var headerModule = angular.module('e3Header', []);

        headerModule.controller(e3HeaderCtrl.id, e3HeaderCtrl);

        headerModule.service(e3HeaderSvc.id, e3HeaderSvc);

        headerModule.mainTemplate = e3HeaderTemp;
        headerModule.controllerName = e3HeaderCtrl.id;
        headerModule.controllerNameAs = e3HeaderCtrl.nameAs;

        return headerModule;
    });
}());
