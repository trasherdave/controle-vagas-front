import Route from '@ember/routing/route';

export default class EditCandidatoRoute extends Route {
  model(params) {
    return this.store.find('candidato', params.id);
  }
}
