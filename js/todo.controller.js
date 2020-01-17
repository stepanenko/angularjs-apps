
function TodoController() {
  this.list = [{
    title: 'First Todo Item',
    completed: false,
    priority: 'high'
  }, {
    title: 'Second Todo Item',
    completed: true,
    priority: 'middle'
  }, {
    title: 'Third Todo Item',
    completed: false,
    priority: 'low'
  }];
}

angular
  .module('app')
  .controller('TodoController', TodoController);
