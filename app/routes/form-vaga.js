import Route from '@ember/routing/route';

export default class FormVagaRoute extends Route {
  model() {
    return this.store.findAll('empresa');
  }
}
