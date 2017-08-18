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

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;

// var OldReducer = (state = {name: stateDefault}, action) => {
//     //state = state || {name: "Anonymous"};
//     switch(action.type){
//         case 'CHANGE_NAME': 
//             return {
//                 ...state,
//                 name: action.name
//             };
//         case 'ADD_HOBBY':
//             return {
//                 ...state,
//                 hobbies: [
//                     ...state.hobbies,
//                     {
//                         id: nextHobbyId++,
//                         hobby: action.hobby
//                     }
//                 ]
//             };
//         case 'ADD_MOVIE': 
//             return {
//                 movies: [
//                     ...state.movies,
//                     {
//                         id: nextMovieId++,
//                         title: action.title,
//                         genre: action.genre 
//                     }
//                 ]
//             };
//         case 'REMOVE_HOBBY':
//             return {
//                 ...state,
//                 hobbies: state.hobbies.filter((hobby) => {
//                     return hobby.id !== action.id
//                 })
//             }
//         case 'REMOVE_MOVIE':
//             return {
//                 ...state,
//                 movies: state.movies.filter((movie) => { return movie.id !== action.id })
//             }
//         default:
//             return state;
//     }
// }

var nameReducer = (state = 'Anonymous', action) => {
    switch(action.type){

        case 'CHANGE_NAME':
             return action.name;
        default: 
            return state;    
    }
}


//action generators
var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name: name
    }
};

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby: hobby
    }
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id: id
    }
};

var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title: title,
        genre: genre
    }
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id: id
    }
};

var hobbiesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_HOBBY':
        return [
            ...state,
            {
                id: nextHobbyId++,
                hobby: action.hobby
            }
        ];
        case 'REMOVE_HOBBY':
            return state.hobbies.filter((hobby) => hobby.id !== action.id)
        default:
            return state;
    }   
}; 

var moviesReducer = (state = [], action){
    switch(action.type){
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre 
                }

            ];
        case 'REMOVE_MOVIE':
            return state.movies.filter((movie) => { return movie.id !== action.id });
        default:
            return state;
    }
}

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => {  return f; } // for using developer tools
)); // store = one object that represents our entire application

// you can unsubscribe by calling this method
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    document.getElementById('app').innerHTML = state.name;
    console.log("Name is " + state.name);
    console.log('New State ', store.getState());
});

store.dispatch(changeName('EMILY'));

store.dispatch(changeName('ANDREW'));

store.dispatch(addHobby("Running"));

store.dispatch(addHobby("Walking"));

store.dispatch(removeHobby(2));

store.dispatch(addMovie("Mad Max", "Action"));

store.dispatch("Matrix", "Action");

store.dispatch(removeMovie(2));

unsubscribe(); // we will not get the second message as we have unsubscribed

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


// An inbuilt debugger provided by redux
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension : f => f
 ));

// subscribing to the changes
store.subscribe(() => {
    var state = store.getState();
    document.getElementById('app').innerHTML = search.searchText; 
});
// dispatching the action
store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "work"
}); // the arguments is an action

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Dog"
});