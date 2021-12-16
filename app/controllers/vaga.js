import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    lerEmpresa(vaga) {

      this.transitionToRoute('empresa-vaga', vaga.id);

    },
    destroyVaga(vaga) {
      let confirmado = window.confirm(
        'Você tem certeza que deseja deletar essa vaga?'
      );
      if (confirmado) {
        vaga.destroyRecord();
      }
    },
    consultarUf(vaga) {
      this.transitionToRoute('vaga-uf', vaga.uf);
    },
    consultarEmpresa(vaga) {
      this.transitionToRoute('vaga-empresa', vaga.nome);
    },
    consultarCidade(vaga) {
      this.transitionToRoute('vaga-cidade', vaga.cidade);
    },
    consultarCargo(vaga) {
      this.transitionToRoute('vaga-cargo', vaga.cargo);
    },
  },
});
