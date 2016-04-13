(function () {
    'use strict';

    function auth($http, $q, identity, authorization, baseServiceUrl) {

        function signup(user) {
            var deferred = $q.defer();

            $http.post(baseServiceUrl + '/api/Account/Register', user)
                .then(function () {
                    deferred.resolve();
                }, function (response) {
                    var error = response.data.modelState;
                    if (error && error[Object.keys(error)[0]][0]) {
                        error = error[Object.keys(error)[0]][0];
                    }
                    else {
                        error = response.data.ModelState[""][1];
                    }
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function login(user) {
            var deferred = $q.defer();
            user['grant_type'] = 'password';
            $http.post(baseServiceUrl + '/api/Token', 'username=' + user.username + '&password=' + user.password + '&grant_type=password', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(function (response) {
                    console.log(response)
                    if (response.data["access_token"]) {
                        identity.setCurrentUser(response.data);
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                }, function (error) {
                    var err = error.data.error_description;
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function logout() {
            var deferred = $q.defer();

            var headers = authorization.getAuthorizationHeader();
            $http.post(baseServiceUrl + '/api/Account/Logout', {}, { headers: headers })
                .then(function () {
                    identity.setCurrentUser(undefined);
                    deferred.resolve();
                });

            return deferred.promise;
        }

        function isAuthenticated() {
            if (identity.isAuthenticated()) {
                return true;
            }
            else {
                return $q.reject('not authorized');
            }
        }

        function isAdmin() {
            if (identity.isAuthenticated()) {
                $http.get(baseServiceUrl + '/users/me')
                    .then(function (userInfo) {
                        if (userInfo.isAdmin) {
                            return true;
                        }
                    });
            }
            else {
                return $q.reject('not authorized');
            }
        }

        return {
            signup: signup,
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            isAdmin: isAdmin
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('auth', ['$http', '$q', 'identity', 'authorization', 'baseServiceUrl', auth]);
}());