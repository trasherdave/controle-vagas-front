import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model(params) {
    return fetch('http://localhost:8080/api/vagas/cargo/' + params.cargo).then(
      function (response) {
        return response.json();
      }
    );
  },

  controllerName: 'vaga',
});
