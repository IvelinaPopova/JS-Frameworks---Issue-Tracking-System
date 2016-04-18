(function () {
    'use strict';

    function projectsService(data) {

        function getAll() {
            return data.get('projects');
        }

        function getById(id) {
            return data.get('projects/' + id);
        }

        function create(project) {
            return data.post('projects/', project);
        }

        return {
            getAll: getAll,
            getById: getById,
            create: create
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('projectsService', ['data', projectsService]);
}());