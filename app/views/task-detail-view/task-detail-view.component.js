angular.module("views")
.component("taskDetailView", {
    templateUrl: "views/task-detail-view/task-detail-view.template.html",
    controller: ["$routeParams", "$scope", function TaskDetailController($routeParams, $scope)
    {
        $scope.taskId = $routeParams.id 
    }]
})