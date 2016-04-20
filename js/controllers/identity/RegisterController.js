(function () {
    'use strict';

    function RegisterController($scope, $location, auth, notify) {
        $scope.register = function (user) {
            auth.register(user).then(function () {
                notify.showInfo('Successful registration!');
                $location.path('/');
            }, function (error) {
                notify.showError(error)
            })
        }
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('RegisterController', ['$scope', '$location', 'auth', 'notify', RegisterController]);
}());