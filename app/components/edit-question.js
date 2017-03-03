import Ember from 'ember';

export default Ember.Component.extend({
  buttonClicked: false,
  actions: {
    buttonClicked() {
      this.set('buttonClicked', true);
    },
    updatePost(message) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        note: this.get ('note')
      };
      this.set('buttonClicked', false);
      this.sendAction('update', message, params);
    }
  },
});
