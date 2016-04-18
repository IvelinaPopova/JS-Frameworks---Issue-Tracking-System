(function () {
    'use strict';

    function HomeController($scope, identity, issuesService) {
        $scope.identity = identity;

        $scope.filterIssues = function () {
            issuesService.filterIssues(request)
                .then(function (filteredIssues) {
                    console.log(filteredIssues)
                    $scope.issues = filteredIssues;
                });
        };


    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('HomeController', ['$scope', 'identity', 'issuesService', HomeController])
}());