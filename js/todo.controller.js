
function TodoController() {
  this.list = [{
    title: 'First Todo Item',
    completed: false
  }, {
    title: 'Second Todo Item',
    completed: false
  }, {
    title: 'Third Todo Item',
    completed: false
  }];
}

angular
  .module('app')
  .controller('TodoController', TodoController);
