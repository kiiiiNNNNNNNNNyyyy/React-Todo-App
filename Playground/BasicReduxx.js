// There are two important thing in redux. 1 - An object that maintains the state. 2 - An Action to change that state
var reduxState = {
    searchText : 'Dog',
    showCompleted: false,
    todos: [{
        id: '123',
        text: 'Walk the Dog'
    }]
};

// This is just an action in redux, nothing more
var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Something Else'
}