// JScript source code

myToDoList.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('project', {
            url: '/projectDescription/{id}',
            templateUrl: 'js/templates/project-description.html',
            controller: "projdesContrl"
        });
    $urlRouterProvider.otherwise('/');
}]);

