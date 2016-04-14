(function () {
    'use strict';

    function usersService(data) {

        function getAll() {
            return data.get('users');
        }

        function me() {
            return data.get('users/me');
        }

        return {
            getAll: getAll,
            me: me
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('usersService', ['data', usersService]);
}());