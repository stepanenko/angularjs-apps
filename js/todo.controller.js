
function TodoController(TodoService) {
  const vm = this;
  vm.newTodo = '';
  vm.list = [];

  function getTodos() {
    TodoService
      .retrieve()
      .then(res => vm.list = res);
  }

  vm.addTodo = function() {
    vm.list.unshift({
      title: vm.newTodo,
      completed: false
    });
    vm.newTodo = '';
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
