define(['./module'], function(services) {
    'use strict';
    services.factory('ChangeLocationSvc', ["$location",
        function($location) {
            var changeLocation = function(loc){
            	$location.path(loc || '/main');
            };
            return changeLocation;
        }
    ])
});
