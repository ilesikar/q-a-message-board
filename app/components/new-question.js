import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes'),
        timeStamp: moment().format('h:mm a, MMMM Do, YYYY'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
