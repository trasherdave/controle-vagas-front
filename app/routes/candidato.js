import Route from '@ember/routing/route';

export default class CandidatoRoute extends Route {
  model() {
    return this.store.findAll('candidato');
  }
}
