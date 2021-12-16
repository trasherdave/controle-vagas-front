import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectContratacao(candidato) {
      this.set('formaContratacao', candidato);
    },
    selectEstado(candidato) {
      this.set('uf', candidato);
    },
    selectSexo(candidato) {
      this.set('sexo', candidato);
    },
    createCandidato() {
      let login = this.login;
      let senha = this.senha;
      let nomeCompleto = this.nomeCompleto;
      let cpf = this.cpf;
      let dataNascimento = this.dataNascimento;
      let sexo = this.sexo;
      let cidade = this.cidade;
      let uf = this.uf;
      let cep = this.cep;
      let email = this.email;
      let telefone = this.telefone;
      //experiencia
      let empresa = this.empresa;
      let cargo = this.cargo;
      let tarefasExecutadas = this.tarefasExecutadas;
      let formaContratacao = this.formaContratacao;
      let dataInicio = this.dataInicio;
      let dataConclusao = this.dataConclusao;

      let newRecord = this.store.createRecord('candidato', {
        login: login,
        senha: senha,
        nomeCompleto: nomeCompleto,
        cpf: cpf,
        dataNascimento: dataNascimento,
        sexo: sexo,
        cidade: cidade,
        uf: uf,
        cep: cep,
        email: email,
        telefone: telefone,
        //experiencia
        empresa: empresa,
        cargo: cargo,
        tarefasExecutadas: tarefasExecutadas,
        formaContratacao: formaContratacao,
        dataInicio: dataInicio,
        dataConclusao: dataConclusao,
      });

      newRecord.save().then(() => {
        alert('Salvo!');
        this.transitionToRoute('candidato');
      });
    },
  },
});
