define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('MainCtrl', [
        "$scope",
        "$http",
        "$interval",
        "LoginSvc",
        "ChangeLocationSvc",
        function($scope, $http, $interval, LoginSvc, ChangeLocationSvc) {
            $scope.showNavBar = true;
            LoginSvc.setUserInfo({
                "username": "fd",
                "password": "tefdsst"
            });
            LoginSvc.login(function(isValid) {
                ChangeLocationSvc(isValid ? '/main' : '/login');
                $scope.showNavBar = isValid ? true : false;
            });
            $scope.$on('showNavBar', function(event, isShow) {
                $scope.showNavBar = isShow;
            });
        }
    ]);
});
