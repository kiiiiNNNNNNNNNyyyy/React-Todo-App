import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDEO4JX5nxlaDWih4cbT6zExRyx3wA4UOU",
	authDomain: "arjun-todo-app.firebaseapp.com",
	databaseURL: "https://arjun-todo-app.firebaseio.com",
	projectId: "arjun-todo-app",
	storageBucket: "arjun-todo-app.appspot.com",
	messagingSenderId: "123075379701"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// set completely wipes data at the current reference
// IMPORTANT  - Set function also returns a promise, so it can be used in .then
firebaseRef.set({
	isRunning: true,
	app: {
		name: "Todo App",
		version: '1.0.0'
	},
	user: {
		name: 'Andrew',
		age: 25
	}
}).then(() => {
	console.log("Worked!!");
}, (err) => {
	console.log("Error");
});

// use child properrty to update only one attribute
firebaseRef.child('user').set({
	name: 'Mike'
});

firebaseRef.child('app').set({
	name: 'Todo App'
});