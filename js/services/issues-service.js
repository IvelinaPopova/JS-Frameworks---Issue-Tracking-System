(function () {
    'use strict';

    function issuesService(data) {

        function getById(issueId) {
            return data.get('issues/' + issueId);
        }

        function getByProjectId(projectId) {
            return data.get('projects/' + projectId + '/issues');
        }

        function getCommentsById(issueId) {
            return data.get('issues/' + issueId + '/comments');
        }

        function filterIssues(filter) {
            return data.get('issues/me' + filter);
        }

        function create(issue) {
            return data.post('issues', issue);
        }

        return {
            getById: getById,
            getByProjectId: getByProjectId,
            getCommentsById: getCommentsById,
            filterIssues: filterIssues,
            create: create
        }
    }

    angular
        .module('issueTrackingSystem.services')
        .factory('issuesService', ['data', issuesService]);
}());