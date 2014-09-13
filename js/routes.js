define(['./nhApp'], function(nhApp) {
    'use strict';
    return nhApp.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('main', {
                    controller: 'MainCtrl'
                })
                .when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'LoginCtrl'
                })
                .when('/home', {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeCtrl'
                })
                .when('/upload', {
                    templateUrl: 'partials/upload.html',
                    controller: 'UploadCtrl'
                })
                .otherwise({
                    redirectTo: '/main'
                });
        }
    ]);
});
