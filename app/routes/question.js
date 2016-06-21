import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('question', params.question_id);
  },
  timesAnswered: Ember.computed('model.answers', function() {
    var answerCount = this.get('model.answers.length');
    if (answerCount === 0) {
      return "This question has no answers yet.";
    } else if (answerCount === 1) {
      return "This question has one answer.";
    } else {
      return "This question has " + answerCount + " answers";
    }
  }),
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
