(function () {
    'use strict';

    function HomeController($scope, identity) {
        $scope.identity = identity;
    }

    angular
        .module('issueTrackingSystem.controllers')
        .controller('HomeController', ['$scope', 'identity', HomeController])
}());