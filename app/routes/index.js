import Ember from 'ember';

var questions = [{
  question: "Why is the sky blue?",
  author: "Ian Lesikar",
  notes: "Is it the same reason water is blue?"
}, {
  question: "How many stars are there in the universe?",
  author: "Carl Sagan",
  notes: "How many galaxies?"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  }
});
