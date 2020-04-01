
function TodoService($http) {
  const API = 'https://jsonplaceholder.typicode.com/todos';

  function retrieve() {
    return $http.get(API).then(res => {
      return res.data.splice(0, 10);
    });
  }

  return {
    // create: create,
    retrieve: retrieve,
    // update: update,
    // remove: remove
  };
}

angular
  .module('app')
  .factory('TodoService', TodoService);
