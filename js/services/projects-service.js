(function () {
    'use strict';

    function projectsService(data) {

        function getAll() {
            return data.get('projects');
        }

        function getById(id) {
            return data.get('projects/' + id);
        }

        return {
            getAll: getAll,
            getById: getById
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('projectsService', ['data', projectsService]);
}());