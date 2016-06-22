import Ember from 'ember';

export default Ember.Service.extend({
	userName: "Guest",

	login(inputName) {
		this.set('userName', inputName);
		console.log("Welcome: " + inputName + "! You are now logged in");
	}
});
