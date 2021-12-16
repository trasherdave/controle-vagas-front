import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    lerEmpresa(empresa) {
      let e = this.model.findBy('id', empresa.id);
      alert(
        'CNPJ: ' + e.get('cnpj') + ' | Razão Social: ' + e.get('razaoSocial')
      );
    },
    deletarEmpresa(empresa) {
      // let destroyId = this.destroyId;
      let confirmado = window.confirm(
        'Você tem certeza que deseja deletar essa empresa?'
      );
      if (confirmado) {
        empresa.destroyRecord();
      }
    },
    consultarUf(empresa) {
      this.transitionToRoute('empresa-uf', empresa.uf);
    },
    consultarNome(empresa) {
      this.transitionToRoute('empresa-nome', empresa.nome);
    },
    consultarCidade(empresa) {
      this.transitionToRoute('empresa-cidade', empresa.cidade);
    },
  },
});
