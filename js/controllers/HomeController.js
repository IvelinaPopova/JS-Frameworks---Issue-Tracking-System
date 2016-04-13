(function () {
    'use strict';

    function HomeController($scope, identity) {
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('HomeController', ['$scope', 'identity', HomeController])
}());