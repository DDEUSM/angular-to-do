angular.module("components")
.directive("taskStatus", function(){
    return  {
        templateUrl: "./components/task-status/task-status.template.html",
        restrict: 'E',
        scope: {
            color: '@',
            status: '@'
        }
    }
})