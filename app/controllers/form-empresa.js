import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectEstado(empresa) {
      this.set('uf', empresa);
    },
    createBoardGame() {
      let nome = this.nome;
      let login = this.login;
      let senha = this.senha;
      let razaoSocial = this.razaoSocial;
      let cnpj = this.cnpj;
      let areaAtuacao = this.areaAtuacao;
      let cidade = this.cidade;
      let uf = this.uf;
      let cep = this.cep;
      let email = this.email;
      let telefone = this.telefone;

      let newRecord = this.store.createRecord('empresa', {
        login: login,
        senha: senha,
        nome: nome,
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        areaAtuacao: areaAtuacao,
        cidade: cidade,
        uf: uf,
        cep: cep,
        email: email,
        telefone: telefone,
      });
      newRecord.save().then(() => {
        alert('Salvo!');
        this.transitionToRoute('empresa');
      });
    },
  },
});
