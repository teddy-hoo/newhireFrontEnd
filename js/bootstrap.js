define([
    'require',
    'angular',
    'nhApp',
    'routes'
], function(require, ng) {
    'use strict';

    require(['domReady!'], function(document) {
        ng.bootstrap(document, ['nhApp']);
    });
});
