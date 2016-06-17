import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question_id: this.get('question_id'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save', params);
    }
  }
});
