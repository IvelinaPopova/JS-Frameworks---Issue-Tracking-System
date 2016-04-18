(function () {
    'use strict';

    function IssueDetailsController($scope, $routeParams, issuesService) {
        var issueId = $routeParams.id;

        issuesService.getById(issueId)
            .then(function (issue) {
                $scope.issue = issue;
            });

        issuesService.getCommentsById(issueId)
            .then(function (comments) {
                $scope.comments = comments;
            })
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('IssueDetailsController', ['$scope', '$routeParams', 'issuesService', IssueDetailsController])
}());