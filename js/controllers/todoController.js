// JScript source code
myToDoList.controller("todoContrl", ["$scope", "$state", "todoService", function($scope, $state, todoService) {

    todoService.projectList().then(function success(res) {
        $scope.todoProject = res.data.records;
    });
    
    $scope.router = function(projId) {
        $state.go("project", {id: projId});
    }
}]);