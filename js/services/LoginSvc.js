define(['./module', './Login'], function(services, Login) {
    'use strict';
    services.factory('LoginSvc', ["$http",
        function($http) {
            var login = new Login($http);
            return login;
        }
    ])
});
