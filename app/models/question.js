import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { asunc: true })
  // hasMultipleAnswers: function() {
  //   return this.get('answers.length') > 1;
  //   return this.get('answers.length') !== 1;
  // }.property('answers')
});
