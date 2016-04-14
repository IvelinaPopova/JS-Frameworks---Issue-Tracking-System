(function () {
    'use strict';

    function ProjectDetailsController($scope, $routeParams, projectsService, issuesService) {
        var projectId = $routeParams.id;

        projectsService.getById(projectId)
            .then(function (project) {
                $scope.project = project;
            });

        issuesService.getByProjectId(projectId)
            .then(function (issues) {
                $scope.issues = issues;
            });
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('ProjectDetailsController', ['$scope', '$routeParams', 'projectsService', 'issuesService', ProjectDetailsController])
}());