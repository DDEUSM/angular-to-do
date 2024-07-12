'use strict';

// Declare app level module which depends on views, and core components
angular.module('todoApp')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when("/login", {
    template: "<login-view></login-view>"
  })
  .when("/tasks", {
    template: "<task-view></task-view>"
  })
  .when("/progression", {
    template: "<progression-view></progression-view>"
  })
  .when("/tasks/:id", {
    template: "<task-detail-view></task-detail-view>"
  })
  .otherwise({ redirectTo: "/login" })
}]);
