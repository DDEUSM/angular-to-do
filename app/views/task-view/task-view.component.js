angular.module("views")
.component("taskView", {
    templateUrl: "./views/task-view/task-view.template.html",
    controller: ["$location", "$scope", function($location, $scope)
    {
        let {view} = $location.search()
        if (!view)
        {
            $scope.listView = false
            $scope.kanbanView = true
            return
        }
        $scope.listView = view == 'list'
        $scope.kanbanView = view == 'kanban'

        $scope.changeView = function(selectedView)
        {
            $scope.listView = selectedView == 'list'
            $scope.kanbanView = selectedView == 'kanban'
            console.log($scope.listView, $scope.kanbanView)
        }

        function mockTasksGenerator(title, qtd)
        {
            let tasks = []
            for (let idx = 0; idx < qtd; idx++)
            {
                tasks.push({
                    id: idx,
                    title: title+" "+idx,
                    priorityLevel: "P3", 
                })
            }
            return tasks
        }

        $scope.tasks = {
            NaoIniciado: mockTasksGenerator(
                "Task não-iniciada",
                7
            ),
            EmProcesso: mockTasksGenerator(
                "Task em-processo",
                8
            ),
            Finalizado: mockTasksGenerator(
                "Task finalizada",
                4
            ),
            Pausado: mockTasksGenerator(
                "Task pausada",
                5
            )
        }
    }]
})