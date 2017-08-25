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
	isRunning: true,
	user: {
		name: 'Andrew',
		age: 25
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('New todo added', snapshot.key, snapshot.val());
});

// one way of removing the data
//firebaseRef.child('app/name	').remove();
// Another way of removing the data is by setting the data null
// firebaseRef.child('app').update({
// 	version: '2.00'
// });

// // Arrays
// var notesRef = firebaseRef.child('notes');

// var newNoteRef = notesRef.push();
// newNoteRef.set({
// 	text: 'Walk the dog!'
// });

// //can also be written as 
// var newNoteRef = notesRef.push({text: 'Walk the dog!'});
// notesRef.on('child_added', (snapshot) => {
// 	console.log('child_Added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
// 	console.log('child_removed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
// 	console.log('child_changed', snapshot.key, snapshot.val());
// });

//update only updates the provided attribute for the nested object  
// Update also comes with a promise

// firebaseRef.update({
// 	'app/name': 'Todo Application',
// 	'user/name': 'Jen'   
// });

// firebaseRef.child('app').update({ name: 'TodoApplciation' });
// firebaseRef.child('user').update({name: 'Mike'});

// firebaseRef.update({
// 	isRunning: false,
// 	'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
// 	name: 'Todo Application'
// });