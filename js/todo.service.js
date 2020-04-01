
function TodoService($http) {
  const API = 'https://jsonplaceholder.typicode.com/todos/';

  function retrieve() {
    return $http.get(API).then(response => {
      return response.data.splice(0, 10);
    });
  }

  function create(todo) {
    return $http.post(API, todo).then(response => {
      return response.data;
    });
  }

  return {
    create: create,
    retrieve: retrieve,
    // update: update,
    // remove: remove
  };
}

angular
  .module('app')
  .factory('TodoService', TodoService);
