angular.module("components")
.directive("taskKanban", function(){
    return  {
        templateUrl: "./components/task-kanban/task-kanban.template.html",
        restrict: 'E',
        scope: {
            tasks: '=',
            color: '@',
            status: '@'
        },
        link: function(scope, element, attrs){
            var childrens = document.querySelectorAll(".draggable-task")
            
            let selectedChildren;

            for(let idx=0; idx <= childrens.length-1; idx++){
                childrens[idx].bind("dragstart", function(){
                    childrens.addClass(".dragging")
                })
                childrens[idx].bind("dragstop", function(event){
                    childrens.addClass(".dragging")
                    selectedChildren = event.target
                })
            }           
            
            element.bind("dragover", function(){
                element.append(selectedChildren)
            })
            
            scope.$on('$destroy', function(){
                
            })
        }
    }
})