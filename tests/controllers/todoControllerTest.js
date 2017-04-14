describe('todoController', function () {
    var $scope,
        $stateStub = {
            go: jasmine.createSpy()
        },
        deferred,
        todoServiceStub = {
            projectList: {}
        }
    beforeEach(module('toDoList'));
    beforeEach(function() {
        module(function($provide) {
            $provide.value('todoService', todoServiceStub);
        });
    });
    beforeEach(inject(function($rootScope, _$q_, _$controller_) {
        $q = _$q_;
        $scope = $rootScope.$new();
        deferred = _$q_.defer();
        spyOn(todoServiceStub, 'projectList').and.returnValue(deferred.promise);
        addController = _$controller_('todoContrl', {$scope: $scope, $state:$stateStub, todoService: todoServiceStub});
    }));
    
        
    it('Verify Scope initialization', function () {
        expect($scope).not.toBe(undefined);
        expect($scope.router).not.toBe(undefined);
    });
    it('verify todoList Service projectList method', function () {
        var res = {};
            res.data = {};
            res.data.records = [{ id: 1 }, { id: 2 }]
        deferred.resolve(res);
        $scope.$apply();
        expect($scope.todoProject.length).toBe(2);
        expect($scope.todoProject[0].id).toBe(1);
        expect($scope.todoProject[1].id).toBe(2);
    });
    
    it('verify router method', function () {
        var id = "id";
        $scope.router(id);
        expect($stateStub.go).toHaveBeenCalled();
        expect($stateStub.go).toHaveBeenCalledWith('project', {id: id});
    });
    
    
});

