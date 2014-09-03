define(['./module', 'api'], function(services, API) {
    'use strict';
    services.factory('UserCountSvc', ["$http", "$interval",
        function($http, $interval) {
            var getUserCount = function(userCountInfo){
            	 $http.get(API.realTimeInfo)
                    .success(function(data) {
                    	recieveData = data;
                        userCountInfo = {
                            'candidates': data.candidates,
                            'hires': data.hires,
                            'users': data.users
                        };
                    })
                    .error(function(data) {
                        userCountInfo = {
                            'candidates': 0,
                            'hires': 0,
                            'users': 0
                        };
                    });
            }
            return getUserCount;
        }
    ])
});
