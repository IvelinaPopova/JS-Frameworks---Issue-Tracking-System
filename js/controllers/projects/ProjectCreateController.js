(function () {
    'use strict';

    function ProjectCreateController($scope, projectsService, usersService) {

        usersService.getAll()
            .then(function (response) {
                $scope.users = response;
            });

        $scope.createProject = function (newProject) {
            var priorities = newProject.Priorities.split(',');

            newProject.Priorities = [];

            priorities.forEach(function (el) {
                el = el.trim();
                newProject.Priorities.push({Name: el});
            });

            projectsService.create(newProject)
                .then(function (response) {
                    console.log(response);
                });
        };
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('ProjectCreateController', ['$scope', 'projectsService', 'usersService', ProjectCreateController])
}());