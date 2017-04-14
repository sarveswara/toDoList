// JScript source code
myToDoList.controller("projdesContrl", ["$scope", "$stateParams", "todoService", function($scope, $stateParams, todoService) {

    $scope.id = $stateParams.id;
    todoService.description().then(function success(res) {
        $scope.proj = res.data[$stateParams.id];
    });
}]);