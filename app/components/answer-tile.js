import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  actions: {
    showNotes: function() {
      this.set('areNotesShowing', true);
    },
    hideNotes: function() {
      this.set('areNotesShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    }
    // delete(question) {
    //   if (confirm('Are you sure you want to delete this question?')) {
    //     this.sendAction('destroyQuestion', question);
    //   }
    // }
  }
});