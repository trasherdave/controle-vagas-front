import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    readCandidato(candidato) {
      let e = this.model.findBy('id', candidato.id);
      alert(e.get('nomeCompleto') + ' ' + e.get('id'));
    },
    destroyCandidato(candidato) {
      let confirmado = window.confirm(
        'Você tem certeza que deseja deletar esse candidato?'
      );
      if (confirmado) {
        candidato.destroyRecord();
      }
    },
    consultarUf(candidato) {
      this.transitionToRoute('candidato-uf', candidato.uf);
    },
    consultarCidade(candidato) {
      this.transitionToRoute('candidato-cidade', candidato.cidade);
    },
    consultarCargo(candidato) {
      this.transitionToRoute('candidato-cargo', candidato.cargo);
    },
  },
});
