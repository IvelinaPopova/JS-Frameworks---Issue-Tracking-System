(function () {
    'use strict';

    function UsersController($scope, identity, auth, usersService) {
        usersService.getAll()
            .then(function (response) {
            }, function (a) {
                console.log(a);
            })
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('UsersController', ['$scope', 'identity', 'auth', 'usersService', UsersController])
}());