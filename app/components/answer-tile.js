import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  actions: {
    update(answer, params) {
      this.sendAction('update', answer, params);
    }
  }
});
