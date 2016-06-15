import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        answer: this.get('answer'),
      };
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
