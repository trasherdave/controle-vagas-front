import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editEmpresa(empresa) {
      alert('Alterado!');
      empresa.save().then(() => {
        this.transitionToRoute('empresa');
      });
    },
  },
});
