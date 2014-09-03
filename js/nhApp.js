/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index',
    './api'
], function(angular) {
    'use strict';

    return angular.module('nhApp', [
        'nhApp.controllers',
        'nhApp.directives',
        'nhApp.filters',
        'nhApp.services',
        'ngRoute'
    ]);
});
