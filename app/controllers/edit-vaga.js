import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editVaga(vaga) {
      vaga.save().then(() => {
        alert('Alterado!');
        this.transitionToRoute('vaga');
      });
    },
  },
});
