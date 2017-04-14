describe('todoTest Service', function () {
    var $httpStub = {
        get: jasmine.createSpy()
    },
    _todoService
    beforeEach(module('toDoList'));
    beforeEach(function() {
        module(function($provide) {
            $provide.value('$http', $httpStub);
        });
    });
    
    beforeEach(inject(function($rootScope, todoService) {
        _todoService = todoService;
    }));
    
    it('verify initilization', function() {
        _todoService.description();
        expect($httpStub.get).toHaveBeenCalled();
        expect($httpStub.get).toHaveBeenCalledWith('js/data/projdesc.json');
        _todoService.projectList();
        expect($httpStub.get).toHaveBeenCalled();
        expect($httpStub.get).toHaveBeenCalledWith('js/data/todoContent.json');
    })
});