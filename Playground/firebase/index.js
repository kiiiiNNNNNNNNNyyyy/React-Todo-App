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

firebase.database().ref().set({
	appName: 'Todo App'
});