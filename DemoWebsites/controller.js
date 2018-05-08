angular.module("todo", []).controller("todoController",['$scope','$http',

function($scope, $http) {
    $scope.show = false;
    $scope.both = false;
    $scope.taskName = "a";
    $scope.taskDesc = "b";
    $http.get('todo.json').success(function(data) {
        $scope.todo = data;
    })
    
    $scope.complete = function(item){
        index = $scope.todo.indexOf(item);
        $scope.todo[index].complete = true;
        return;
    }
    
    $scope.remove = function(item){
        $scope.todo.splice($scope.todo.indexOf(item), 1)
        return;
    }
    
    $scope.add = function(){
        for (var x in $scope.todo){
            if ($scope.todo[x].task === $scope.taskName){
                alert("Task already exists!");
                return;
            }
        }
        newTask = [{
            "task":$scope.taskName,
            "complete":false,
            "description":$scope.taskDesc
        }];
        $scope.todo = $scope.todo.concat(newTask);
    }
    
    $scope.showList = function(show, both){
        $scope.both = both;
        $scope.show = show;
    }

}
    ]
                                      )