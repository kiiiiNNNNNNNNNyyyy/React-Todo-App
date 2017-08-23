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
});

//update only updates the provided attribute for the nested object  
// Update also comes with a promise

firebaseRef.update({
	'app/name': 'Todo Application',
	'user/name': 'Jen'   
});

firebaseRef.child('app').update({ name: 'TodoApplciation' });
firebaseRef.child('user').update({name: 'Mike'});

// firebaseRef.update({
// 	isRunning: false,
// 	'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
// 	name: 'Todo Application'
// });