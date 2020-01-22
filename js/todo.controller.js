
function TodoController() {
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
}

angular
  .module('app')
  .controller('TodoController', TodoController);
