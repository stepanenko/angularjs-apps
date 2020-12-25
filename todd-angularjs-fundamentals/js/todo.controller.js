
function TodoController(TodoService) {
  const vm = this;
  vm.newTodo = '';
  vm.list = [];

  function getTodos() {
    TodoService.retrieve().then(response => vm.list = response);
  }

  vm.addTodo = function() {
    if (!vm.newTodo) return;
    const todo = {
      title: vm.newTodo,
      completed: false
    }
    TodoService.create(todo).then(response => {
      response.id = vm.list.length + 1;
      vm.list.unshift(response);
      vm.newTodo = '';
    });
  }

  vm.editTodo = function(todo, index) {
    if (todo.title === '') {
      vm.removeTodo(todo, index);
      return;
    }
    TodoService.update(todo);
  }

  vm.onTodoCheck = function(todo) {
    TodoService
      .update(todo)
      .then(() => {}, () => todo.completed = !todo.completed);
  }

  vm.removeTodo = function(todo, index) {
    TodoService.remove(todo)
      .then(() => vm.list.splice(index, 1));
  }

  vm.getRemaining = function() {
    return vm.list.filter(todo => !todo.completed);
  }

  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
