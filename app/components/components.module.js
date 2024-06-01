angular.module("components", [
])
.controller('Controller', ['$scope', function ($scope){
    $scope.kanban = true 
    $scope.list = false
    $scope.setView = function(view)
    {
        switch(view){
            case 'kanban':
                $scope.kanban = true
                $scope.list = false
                break
            case 'list':
                $scope.kanban = false
                $scope.list = true
                break
        }
    }
}])