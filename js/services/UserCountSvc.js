define(['./module', 'api'], function(services, API) {
    'use strict';
    services.factory('UserCountSvc', ["$http", "$interval",
        function($http, $interval) {
            var getUserCount = function(callback){
            	 $http.get(API.realTimeInfo)
                    .success(function(data) {
                        callback(data);
                    })
                    .error(function(data) {
                        callback({
                            'candidates': 0,
                            'hires': 0,
                            'users': 0
                        });
                    });
            }
            return getUserCount;
        }
    ])
});
