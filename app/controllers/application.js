import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createBoardGame() {
      // get the input value from the .hbs template
      let newBoardGame = this.newBoardGame;
      // create a record in Ember Data (locally, would not survive page refresh)
      let newRecord = this.store.createRecord('empresa', {
        title: newBoardGame,
      });
      // Save the record to the API endpoint specified in adapters/empresa.js
      newRecord.save();
    },
    readBoardGame() {
      // get the input value from the .hbs template
      let id = this.boardGameId;
      // find the record (cheating and using id 1 from my mocked server)
      this.store.findRecord('empresa', 1).then((game) => {
        alert(game.get('nome') + ' ' + game.get('id'));
        console.log(game.get('nome'));
      });
    },
    updateBoardGame() {
      let updatedTitle = this.updatedTitle;
      let game = this.model.findBy('id', '1');
      game.set('title', updatedTitle); // locally update the title
      alert(game.title);
      game.save(); // save the title to API via PATCH
    },
    destroyBoardGame() {
      let destroyId = this.destroyId;
      let game = this.model.findBy('id', destroyId);
      game.destroyRecord(); // destroy deletes & saves in one step
    },
  },
});
