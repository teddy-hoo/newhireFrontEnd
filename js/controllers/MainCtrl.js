define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('MainCtrl', [
        "$scope",
        "$http",
        "$interval",
        "LoginSvc",
        "ChangeLocationSvc",
        function($scope, $http, $interval, LoginSvc, ChangeLocationSvc) {
            LoginSvc.setUserInfo({
                "username": "test",
                "password": "test"
            });
            LoginSvc.login(function(isValid) {
                ChangeLocationSvc(isValid ? '/main' : '/login');
            });
        }
    ]);
});
