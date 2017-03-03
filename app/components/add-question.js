import Ember from 'ember';

export default Ember.Component.extend({
  thisButton: false,
  actions: {
    thisButton() {
      this.set('thisButton', true);
    },
    addPost() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.set('thisButton', false);
      this.sendAction('sendPost', params);
    }
  }
});
