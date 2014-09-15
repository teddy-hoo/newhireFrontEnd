define(['nhApp', 'api'], function(API) {
    describe('nhApp', function() {

        beforeEach(module('nhApp'));

        describe("MainCtrl", function() {
            var $httpBackend, $scope, createController, $location;
            beforeEach(inject(function($injector) {
                $location = $injector.get('$location');
                $httpBackend = $injector.get('$httpBackend');
                $scope = $injector.get('$rootScope');
                var $controller = $injector.get('$controller');
                createController = function() {
                    return $controller('MainCtrl', {
                        '$scope': $scope
                    });
                };
            }));

            it("should hide navigation bar", function() {
                var controller = createController();
                $scope.showNavBar = false;
                $scope.$emit("showNavBar", false);
                expect($scope.showNavBar).toBe(false);
            });

            it("should logout", function() {
                var controller = createController();
                $httpBackend
                $scope.logout();
                $httpBackend.when('POST', API.auth)
                    .respond({
                        status: 200
                    });
                $httpBackend.when('DELETE', API.auth)
                    .respond({
                        status: 200
                    });
                $httpBackend.flush();
                expect($scope.showNavBar).toBe(false);
                expect($location.path()).toBe('/login');
            });

        });

        describe("LoginCtrl", function() {
            var $httpBackend, $scope, createController, $location;
            beforeEach(inject(function($injector) {
                $location = $injector.get('$location');
                $httpBackend = $injector.get('$httpBackend');
                $httpBackend.when('GET', API.realTimeInfo)
                    .respond({
                        candidates: 200,
                        hires: 200,
                        users: 200
                    });
                $scope = $injector.get('$rootScope');
                var $controller = $injector.get('$controller');
                createController = function() {
                    return $controller('LoginCtrl', {
                        '$scope': $scope
                    });
                };
            }));

            it("should run login function when enter keydown", function() {
                var controller = createController();
                $httpBackend.when('POST', API.auth)
                    .respond({
                        status: 200
                    });
                var event = {};
                event.keyCode = 13;
                $scope.keyDown(event);
                $httpBackend.flush();
                expect($location.path()).toBe("/home");
            });

            it("should get candidates info", function(){
                var controller = createController();
                $httpBackend.flush();
                expect($scope.userCountInfo.candidates).toBe(200);
            });

            it("should validate user input", function(){
                var controller = createController();
                $scope.userInfo.username = '';
                $scope.userInfo.password = 'test';
                $scope.validate();
                expect($scope.errmsg).toBe("User name empty");
            });
        });
    });
});
