(function () {
    'use strict';

    function HomeController($scope, identity, projectsService, usersService, issuesService, statisticsService) {
        $scope.identity = identity;

        if (identity.isAuthenticated()) {

            usersService.me()
                .then(function (user) {
                    projectsService.getProjectsUserIsLead(user.Id)
                        .then(function (projects) {
                            $scope.projects = projects;
                        });
                });

            issuesService.filterMineIssues('?pageSize=20&pageNumber=1&orderBy=Priority.Name')
                .then(function (data) {
                });

            statisticsService.getStatistics()
                .then(function (stats) {
                    $scope.stats = stats;
                });
        }
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('HomeController', ['$scope', 'identity', 'projectsService', 'usersService', 'issuesService', 'statisticsService', HomeController])
}());