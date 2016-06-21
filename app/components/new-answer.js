import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('question'),
        timeStamp: moment().format('h:mm a, MMMM Do, YYYY'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
