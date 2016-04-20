(function () {
    'use strict';

    function HomeController($scope, identity, projectsService, usersService, issuesService) {
        $scope.identity = identity;

        usersService.me()
            .then(function (user) {
                projectsService.getProjectsUserIsLead(user.Id)
                    .then(function (projects) {
                        $scope.projects = projects;
                    });
            });

        issuesService.filterMineIssues('?pageSize=20&pageNumber=1&orderBy=Priority.Name')
            .then(function (data) {
                console.log(data)
            })


    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('HomeController', ['$scope', 'identity', 'projectsService', 'usersService', 'issuesService', HomeController])
}());