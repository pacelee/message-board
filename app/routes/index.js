import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    messages: this.store.findAll('message'),
    reviews: this.store.findAll('review')
  });
  },
  actions: {
    update(message, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          message.set(key,params[key]);
        }
      });
      message.save();
      this.transitionTo('index');
    },
    sendPost(params) {
      var newPost = this.store.createRecord('message', params);
      debugger;
      newPost.save();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var message = params.message;
      debugger;
      message.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return message.save();
      });
      this.transitionTo('index', message);
    }
  }
});
