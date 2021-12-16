import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectEmpresa(vaga) {
      this.set('empresaid', vaga);
    },
    selectContratacao(vaga) {
      this.set('formaContratacao', vaga);
    },
    selectTurno(vaga) {
      this.set('turno', vaga);
    },
    selectValeTransporte(vaga) {
      this.set('valeTransporte', vaga);
    },
    selectValeRefeicao(vaga) {
      this.set('valeRefeicao', vaga);
    },
    selectEstado(vaga) {
      this.set('uf', vaga);
    },
    createVaga() {
      let cargo = this.cargo;
      let especificCargo = this.especificCargo;
      let remuneracao = this.remuneracao;
      let valeTransporte = this.valeTransporte;
      let valeRefeicao = this.valeRefeicao;
      let turno = this.turno;
      let formaContratacao = this.formaContratacao;
      let uf = this.uf;
      let empresaid = this.empresaid;

      let newRecord = this.store.createRecord('vaga', {
        cargo: cargo,
        especificCargo: especificCargo,
        remuneracao: remuneracao,
        valeTransporte: valeTransporte,
        valeRefeicao: valeRefeicao,
        turno: turno,
        uf: uf,
        formaContratacao: formaContratacao,
        empresaid: empresaid,
      });

      newRecord.save().then(() => {
        alert('Salvo!');
        this.transitionToRoute('vaga');
      });
    },
  },
});
