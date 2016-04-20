(function () {
    'use strict';

    function IssueCreateController($scope, $routeParams, issuesService, projectsService, usersService) {
        var projectId = $routeParams.id;

        usersService.getAll()
            .then(function (response) {
                $scope.users = response;
            });

        projectsService.getById(projectId)
            .then(function (project) {
                $scope.project = project;
                $scope.priorities = project.Priorities;
            });

        $scope.createIssue = function (newIssue) {
            newIssue.ProjectId = projectId;
            newIssue.DueDate = '2016/03/21';
            console.log(newIssue);
            issuesService.create(newIssue)
                .then(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                });
        };
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('IssueCreateController', ['$scope', '$routeParams', 'issuesService', 'projectsService', 'usersService', IssueCreateController])
}());