
function TodoService($http) {
  const API = 'https://jsonplaceholder.typicode.com/todos/';

  function retrieve() {
    return $http.get(API).then(response => {
      return response.data.splice(0, 10);
    });
  }

  function create(todo) {
    return $http.post(API, todo)
      .then(res => {
        console.log(
          `Method: ${res.config.method}, Status: ${res.status}, Data added: ${res.data.id}`
        );
        return res.data;
      })
      .catch(err => console.log('Error code:', err.status));
  }

  function update(todo) {
    return $http.put(API + todo.id, todo)
      .then(res => {
        console.log(
          `Method: ${res.config.method}, Status: ${res.status}, Data changed: ${res.data.id}`
        );
        return res.data;
      })
      .catch(err => console.log('Error code:', err.status));
  }

  function remove(todo) {
    return $http.delete(API + todo.id)
      .then(res => {
        console.log(
          `Method: ${res.config.method}, Status: ${res.status}, Data removed: ${todo.id}`
        );
      })
      .catch(err => console.log('Error code:', err.status));
  }

  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
  };
}

angular
  .module('app')
  .factory('TodoService', TodoService);
