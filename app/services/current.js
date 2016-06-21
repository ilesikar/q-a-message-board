import Ember from 'ember';

export default Ember.Service.extend({
	user: "Anonymous",

	login(input) {
		this.set('user', input);
		console.log("Welcome: " + input + "! You are now logged in");
	}
});
