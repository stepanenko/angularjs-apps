
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
      vm.list.unshift(response);
      vm.newTodo = '';
    });
  }

  vm.removeTodo = function(item, index) {
    vm.list.splice(index, 1);
  }

  vm.getRemaining = function() {
    return vm.list.filter(todo => !todo.completed);
  }

  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
