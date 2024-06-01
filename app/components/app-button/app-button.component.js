angular.module("components")
.directive("appButton", function (){
    return {
        restrict: 'E',
        templateUrl: "./components/app-button/app-button.template.html",
        scope: {
            status: '=status',
            text: '@',
            setView: '&'
        }
    }
})