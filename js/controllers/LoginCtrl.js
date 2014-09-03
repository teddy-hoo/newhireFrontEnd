define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('LoginCtrl', [
        '$scope',
        '$http',
        '$interval',
        'UserCountSvc',
        function($scope, $http, $interval, UserCountSvc) {
            
            $scope.userCountInfo = {};
            UserCountSvc($scope.userCountInfo);

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
