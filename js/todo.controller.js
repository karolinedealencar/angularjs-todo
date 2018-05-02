function TodoController() {

    this.newTodo = '';

    this.list = [{
        title: 'First todo item!',
        completed: false
    }, {
        title: 'Second todo item!',
        completed: false
    }, {
        title: 'Third todo item!',
        completed: false
    }];
    
    this.addTodo = function() {
        this.list.unshift({
            title: this.newTodo,
            completed: false
        });
        this.newTodo = '';
    };
    
}

angular
    .module('app')
    .controller('TodoController', TodoController);