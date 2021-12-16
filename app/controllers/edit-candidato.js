import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editCandidato(candidato) {
      candidato.save().then(() => {
        alert('Alterado!');
        this.transitionToRoute('candidato');
      });
    },
  },
});
