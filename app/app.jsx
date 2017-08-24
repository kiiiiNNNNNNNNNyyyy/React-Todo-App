var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');	

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');

import './../Playground/firebase/index';

store.subscribe(() => {
	var state = store.getState();
	console.log('New State', state);
	TodoApi.setTodos(state.todos);
});

var intialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(intialTodos)); 	

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);
