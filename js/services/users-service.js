(function () {
    'use strict';

    function usersService(data) {

        function getAll() {
            return data.get('users');
        }

        function me() {
            return data.get('users/me');
        }

        function makeAdmin(userId) {
            var putData = { UserId : userId };

            data.put('users/makeadmin', putData)
                .then(function (data) {
                    console.log(data);
                });
        }

        return {
            getAll: getAll,
            makeAdmin: makeAdmin,
            me: me
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('usersService', ['data', usersService]);
}());