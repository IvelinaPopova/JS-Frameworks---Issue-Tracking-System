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

        function getPrioritiesByProjectId(projectId) {
            return data.get('projects/' + projectId)
                .then(function (project) {
                    return project.Priorities;
                })
        }

        return {
            getAll: getAll,
            getById: getById,
            create: create,
            getPrioritiesByProjectId: getPrioritiesByProjectId
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('projectsService', ['data', projectsService]);
}());