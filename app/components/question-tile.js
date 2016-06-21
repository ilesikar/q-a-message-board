import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  timesAnswered: Ember.computed('question.answers', function() {
		var answerCount = this.get('question.answers.length');
		if (answerCount === 0) {
			return "This question has no answers yet.";
    } else if (answerCount === 1) {
      return "This question has one answer."
		} else {
			return "This question has " + answerCount + " answers";
		}
	}),
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
