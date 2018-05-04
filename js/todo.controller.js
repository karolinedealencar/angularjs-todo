function TodoController(TodoService) {
    var ctrl = this;

    ctrl.newTodo = '';
    ctrl.list = [];

    function getTodos() {
        TodoService
            .retrieve()
            .then(function(response) {
                ctrl.list = response;
            }); 
    }
    
    ctrl.addTodo = function() {
        ctrl.list.unshift({
            title: ctrl.newTodo,
            completed: false
        });
        ctrl.newTodo = '';
    };

    ctrl.removeTodo = function(item, index) {
        ctrl.list.splice(index, 1);
    };

    ctrl.updateTodo = function(item, index) {
        TodoService
            .update(item);
    }

    ctrl.getRemaining = function() {
        return ctrl.list.filter(function(item) {
            return !item.completed;
        });
    };

    getTodos();
    
}

angular
    .module('app')
    .controller('TodoController', TodoController);