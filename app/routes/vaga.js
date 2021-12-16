import Route from '@ember/routing/route';

export default class VagaRoute extends Route {
  model() {
    return this.store.findAll('vaga');
  }
}
