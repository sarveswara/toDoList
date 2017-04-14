// JScript source code
myToDoList.factory("todoService", ["$http", function($http) {

    var description = function() {
        return $http.get('js/data/projdesc.json')
    }
    var projectList = function() {
        return $http.get('js/data/todoContent.json')
    }
    return {
        description: description,
        projectList: projectList
    };
} ]);

