(function () {
    'use strict';

    function ProjectDetailsController($scope, $routeParams, projectsService, issuesService) {
        var projectId = $routeParams.id;

        projectsService.getById(projectId)
            .then(function (project) {
                var labels = [];
                var priorities = [];

                project.Labels.forEach(function (label) {
                    labels.push(label.Name);
                });
                project.Priorities.forEach(function (priority) {
                    priorities.push(priority.Name);
                });

                labels = labels.join(', ');
                priorities = priorities.join(', ');

                project.Labels = labels;
                project.Priorities = priorities;

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