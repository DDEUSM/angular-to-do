angular.module("todoApp", [
    "todoApp.version",
    "ngRoute",
    "templates",
    "components",
    "views"
]).run(['$rootScope', '$location', function ($rootScope, $location)
{
    $rootScope.go = function(path)
    {
        $location.path(path)
    } 
}])