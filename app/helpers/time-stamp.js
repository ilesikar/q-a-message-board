import Ember from 'ember';
import moment from 'moment';

export function timeStamp(params) {
  var object = params[0];
   return moment(object.get('timeStamp'), 'h:mm a, MMMM Do, YYYY').fromNow();

}

export default Ember.Helper.helper(timeStamp);
