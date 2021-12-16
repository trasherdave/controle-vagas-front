import Route from '@ember/routing/route';

export default class EmpresaVagaRoute extends Route {
  model(params) {
    return this.store.find('empresa', params.id);
  }
}
