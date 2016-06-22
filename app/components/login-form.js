import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),

  actions: {
    logIn() {
      var userInput = this.get('userName');
      this.get('currentUser').login(userInput);
    }
  }
});
