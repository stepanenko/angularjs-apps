
function TodoController() {
  this.newTodo = '';
  this.list = [{
    title: 'First Todo Item',
    completed: false
  }, {
    title: 'Second Todo Item',
    completed: true
  }, {
    title: 'Third Todo Item',
    completed: false
  }, {
    title: 'Fourth Todo Item',
    completed: false
  }];

  this.addTodo = function() {
    this.list.unshift({
      title: this.newTodo,
      completed: false
    });
    this.newTodo = '';
  }

  this.removeTodo = function(item, index) {
    this.list.splice(index, 1);
  }

  this.getRemaining = function() {
    return this.list.filter(todo => !todo.completed);
  }
}

angular
  .module('app')
  .controller('TodoController', TodoController);
