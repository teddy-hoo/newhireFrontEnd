define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('LoginCtrl', [
        '$scope',
        '$http',
        '$location',
        '$timeout',
        'UserCountSvc',
        'LoginSvc',
        function($scope, $http, $location, $timeout, UserCountSvc, LoginSvc) {

            $scope.userInfo = {
                "username": "",
                "password": ""
            };
            $scope.errmsg = null;

            var errmsgs = {
                "unEmpty": "User name empty",
                "pwError": "User name or password error"
            };

            $scope.userCountInfo = {};
            UserCountSvc($scope.userCountInfo);
            var loginFunc = function() {
                $scope.showLoadingIcon = true;
                LoginSvc.setUserInfo($scope.userInfo);
                LoginSvc.login(function(isValid) {
                    if (isValid) {
                        $location.path("/home");
                        $scope.$emit('showNavBar', true);
                    } else {
                        $scope.errmsg = errmsgs.pwError;
                        $scope.showAlert = true;
                        $scope.showLoadingIcon = false;
                    }
                });
            };
            $scope.validate = function() {
                $scope.timeOut && $timeout.cancel($scope.timeOut);
                $scope.showLoadingIcon = false;
                if ($scope.userInfo.username === '' && $scope.userInfo.password !== '') {
                    $scope.showAlert = true;
                    $scope.errmsg = errmsgs.unEmpty;
                    return;
                }
                $scope.showAlert = false;
                if ($scope.userInfo.username !== null && $scope.userInfo.password !== null &&
                    $scope.userInfo.username !== '' && $scope.userInfo.password !== '') {
                    $scope.timeOut = $timeout(loginFunc, 1000);
                }
            };
            $scope.keyDown = function($event) {
                if ($event.keyCode === 13) {
                    loginFunc();
                }
            };
        }
    ]);
});
