import Ember from 'ember';
import moment from 'moment';

export function timeFormat(params) {
  var answer = params[0];
  console.log(answer);
  var answerTime = answer.get('timeStamp');
  console.log(answerTime);
  return moment(answerTime, 'h:mm a, MMMM Do, YYYY').fromNow();
}

export default Ember.Helper.helper(timeFormat);
