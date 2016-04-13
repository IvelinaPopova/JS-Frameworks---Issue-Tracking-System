(function () {
    'use strict';

    function usersService(data) {

        function getAll() {
            return data.get('users');
        }

        return {
            getAll: getAll
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('usersService', ['data', usersService]);
}());