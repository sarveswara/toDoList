describe('projectDescription Controller', function () {
    var $scope,
        id= '1',
        $stateParams = {
            id: id
        },
        todoServiceStub = {
            description: {}
        };
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
        spyOn(todoServiceStub, 'description').and.returnValue(deferred.promise);
        addController = _$controller_('projdesContrl', {$scope: $scope, $stateParams:$stateParams, todoService: todoServiceStub});
    }));
    
    it('Verify Scope initialization', function () {
        expect($scope).not.toBe(undefined);
        expect($scope.id).toBe(id);
    });

    it('Verify todo service description', function () {
        var res = {};
            res.data = {'1': 'projectDescription'};
        deferred.resolve(res);
        $scope.$apply();
        expect($scope.proj).toBe(res.data[id]);
    });
});