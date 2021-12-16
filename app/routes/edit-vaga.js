import Route from '@ember/routing/route';

export default class EditVagaRoute extends Route {
  model(params) {
    return this.store.find('vaga', params.id);
  }
}
