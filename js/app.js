(function () {
    'use strict';

    function config($routeProvider) {

        var PARTIALS_PREFIX = 'templates/partials/';

        $routeProvider
            .when('/', {
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController'
            })
            .when('/register', {
                templateUrl: PARTIALS_PREFIX + 'identity/register.html',
                controller: 'RegisterController'
            })
            .when('/login', {
                templateUrl: PARTIALS_PREFIX + 'identity/login.html',
                controller: 'LoginController'
            })
            .when('/users', {
                templateUrl: PARTIALS_PREFIX + 'users/users.html',
                controller: 'UsersController'
            })
            .when('/projects', {
                templateUrl: PARTIALS_PREFIX + 'projects/projects.html',
                controller: 'ProjectsController'
            })
            .when('/projects/:id', {
                templateUrl: PARTIALS_PREFIX + 'projects/project-details.html',
                controller: 'ProjectDetailsController'
            })
            .when('/issues/:id', {
                templateUrl: PARTIALS_PREFIX + 'issues/issue-details.html',
                controller: 'IssueDetailsController'
            })
            .when('/me', {
                templateUrl: PARTIALS_PREFIX + 'users/me.html',
                controller: 'UsersController'
            })
            .when('/unauthorized', {
                template: '<h1 class="text-center">YOU ARE NOT AUTHORIZED!</h1>'
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('issueTrackingSystem.services', []);
    angular.module('issueTrackingSystem.directives', []);
    angular.module('issueTrackingSystem.filters', []);
    angular.module('issueTrackingSystem.controllers', ['issueTrackingSystem.services']);

    angular.module('issueTrackingSystem', ['ngRoute', 'ngCookies', 'issueTrackingSystem.controllers', 'issueTrackingSystem.directives', 'issueTrackingSystem.filters'])
        .config(['$routeProvider', config])
        .constant('noty', noty)
        .constant('baseServiceUrl', 'http://softuni-issue-tracker.azurewebsites.net');
}());