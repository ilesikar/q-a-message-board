import Ember from 'ember';
import moment from 'moment';

export function timeFormat(timeStamp) {
  return moment(timeStamp, 'h:mm a, MMMM Do, YYYY').fromNow();
}

export default Ember.Helper.helper(timeFormat);
