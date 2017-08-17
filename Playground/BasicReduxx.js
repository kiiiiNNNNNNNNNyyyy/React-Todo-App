var redux = require('redux');
// There are two important thing in redux. 1 - An object that maintains the state. 2 - An Action to change that state
var reduxState = {
    searchText : 'Dog',
    showCompleted: false,
    todos: [{
        id: '123',
        text: 'Walk the Dog'
    }]
};


// Pure Functions

// Its always gonna return the same result, given the same input
// It doesn't even change any outside variable
function add(a, b){
    return a + b;
}

// In redux, pure funcions cannot have async request, which means no callbacks or Promises.
// Pure functions wlill also not change the value of the arguements

// This is just an action in redux, nothing more
var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Something Else'
}

// Getting started
// createStore takes an arguement which need to be a pure function - reducer
// A reducer takes your existing state and action as arguements and computes the new state

var reducer = (state = {name: "Anonymous"}, action) => {
    //state = state || {name: "Anonymous"};
    switch(action.type){
        case 'CHANGE_NAME': 
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
}

var store = redux.createStore(reducer); // store = one object that represents our entire application

// getting the current state which has been changed by the reducer
var currentState = store.getState();   
console.log('currentState', currentState); 

// Creating a todo aplication with redux

var defaultState = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = defaultState, action) => {
    // using the action to change the state
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT': 
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

// dispatching the action
store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "work"
}); // the arguments is an action