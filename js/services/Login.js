define(['api',
    '../helper/dataSerialize'
], function(API, dataSerialize) {
    var Login = function($http, userInfo) {
        this.userName = userInfo && ususerInfo.username;
        this.passWord = userInfo && userInfo.passWord;
        this.isValid = false;
        this.$http = $http;
    };

    Login.prototype.setUserInfo = function(userInfo) {
        this.userName = userInfo && userInfo.username;
        this.passWord = userInfo && userInfo.password;
    };

    Login.prototype.login = function(callback) {
        var that = this;
        this.$http.post(API.auth, dataSerialize({
            username: that.userName,
            password: that.passWord
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        })
            .success(function(data) {
                that.isValid = true;
                callback(true);
            })
            .error(function(data) {
                that.isValid = false;
                callback(false);
            });
        return this;
    };
    Login.prototype.logout = function(callback) {
        var that = this;
        this.$http.delete(API.auth)
            .success(function(data) {
                that.isDeleted = true;
                callback(true);
            })
            .error(function(data) {
                that.isDeleted = false;
                callback(false);
            });
        return this;
    };
    return Login;
});
