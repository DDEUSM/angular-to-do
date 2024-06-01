'use strict';

// Declare app level module which depends on views, and core components
angular.module('todoApp')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when("/tasks", {
    template: "<task-view></task-view>"
  })
  .when("/progression", {
    template: "<progression></"
  })
}]);
