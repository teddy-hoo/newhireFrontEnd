define(['nhApp'], function() {
    describe('nhApp', function() {

        beforeEach(module('nhApp'));

        describe("MainCtrl", function() {
            var $scope, createController;
            var $httpBackend, $scope, createController;
            beforeEach(inject(function($injector) {
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

        });

        describe("cRealtimeInfo", function() {
            var $httpBackend, $rootScope, createController;
            beforeEach(inject(function($injector) {
                $httpBackend = $injector.get('$httpBackend');
                $httpBackend.when('GET', API.realTimeInfo)
                    .respond({
                        candidates: 1045646,
                        hires: 12346,
                        users: 586
                    });
                $rootScope = $injector.get('$rootScope');
                var $controller = $injector.get('$controller');
                createController = function() {
                    return $controller('cRealtimeInfo', {
                        '$scope': $rootScope
                    });
                };
            }));

            it("should get real time info", function() {
                $httpBackend.expectGET(API.realTimeInfo);
                var controller = createController();
                setTimeout(function() {
                    $httpBackend.flush();
                }, 100);
                expect(controller).toBeDefined();
            });
        });

        describe("cLogin", function() {
            var $httpBackend, $scope, createController;
            beforeEach(inject(function($injector) {
                $httpBackend = $injector.get('$httpBackend');
                $httpBackend.when('POST', API.auth)
                    .respond({
                        status: 200
                    });
                $scope = $injector.get('$rootScope');
                var $controller = $injector.get('$controller');
                createController = function() {
                    return $controller('cLogin', {
                        '$scope': $scope
                    });
                };
            }));

            it("should validate username and password", function() {
                var controller = createController();
                $scope.userInfo.username = "test";
                $scope.userInfo.password = "test";
                $scope.validate();
                expect($scope.timeOut).toBeDefined();
            });

            it("should display loading icon", function() {
                var controller = createController();
                $scope.userInfo.username = 'test';
                $scope.userInfo.password = 'test';
                $scope.validate();
                expect($scope.showLoadingIcon).toBe(false);
            });
        });

        describe("cBody", function() {
            var $httpBackend, createController, $scope;
            beforeEach(inject(function($injector) {
                var $controller = $injector.get('$controller');
                $httpBackend = $injector.get('$httpBackend');
                $scope = $injector.get('$rootScope');
                createController = function() {
                    return $controller('cBody', {
                        '$scope': $scope
                    });
                };
            }));

            it("should change current page", function() {
                var controller = createController();
                $httpBackend.when('POST', API.auth)
                    .respond({
                        status: true
                    });
                $httpBackend.expectPOST(API.auth);
                $scope.$emit("changePage", "pHome");
                $httpBackend.flush();
                expect($scope.showPages.pLogin).toBe(false);
                expect($scope.showPages.pHome).toBe(true);
            });
        });

        describe("login", function() {
            var $httpBackend, $http;
            beforeEach(inject(function($injector) {
                $httpBackend = $injector.get('$httpBackend');
                $http = $injector.get('$http');
            }));
            it("should send correct username and password", function() {
                var oLogin = new Login($http);
                $httpBackend.when('POST', API.auth)
                    .respond({
                        status: true
                    });
                $httpBackend.expectPOST(API.auth);
                oLogin.setUserInfo({
                    "username": "test",
                    "password": "test"
                });
                var flag;
                var cb = function(isValid) {
                    flag = isValid ? true : false;
                };
                oLogin.login(cb);
                $httpBackend.flush();
                expect(flag).toBe(true);
            });
        });
    });
});
