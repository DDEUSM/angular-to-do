angular.module("components")
.component("progressionStatus", {
    templateUrl: "components/progression-status/progression-status.template.html",
    controller: ['$scope', function($scope)
    {
        $scope.progressions = [
            {
                title: "Não iniciados",
                count: 3,
                color: "gray"
            },
            {
                title: "Em progresso",
                count: 4,
                color: "blue"
            },
            {
                title: "Finalizados",
                count: 5,
                color: "yellow"
            },
            {
                title: "Pausados",
                count: 5,
                color: "green"
            }
        ]
    }]
})