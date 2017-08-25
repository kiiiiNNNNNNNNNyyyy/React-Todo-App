import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';
import uuid from 'node-uuid'; 

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo: todo
	};
};

export var startAddTodos = (todos) => {
	return (dispatch, getState) => {
		var todosRef = firebaseRef.child('todos');
		
		todosRef.once('value').then((snapshot) => {
			var todos = snapshot.val() || {};
			var parsedTodos = [];

			Object.keys(todos).forEach((todoId) => {
				parsedTodos.push({
					id: todoId,
					...todos[todoId]
				});
			});

			dispatch(addTodos(parsedTodos));
		});
	};
}

export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		var todo = {
			id: uuid(),
			text: text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		var todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});
	};
};

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};
