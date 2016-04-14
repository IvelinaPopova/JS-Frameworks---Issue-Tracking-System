(function () {
    'use strict';

    function IssueDetailsController($scope, $routeParams, issuesService) {
        var issueId = $routeParams.id;

        issuesService.getById(issueId)
            .then(function (issue) {
                $scope.issue = issue;
            });
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('IssueDetailsController', ['$scope', '$routeParams', 'issuesService', IssueDetailsController])
}());