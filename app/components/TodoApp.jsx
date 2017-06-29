var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApi = require('TodoApi');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoApp = React.createClass({

    getInitialState: function(){
        return {

            showCompleted: false,
            searchText:'',  
            todos: TodoApi.getTodos()
        };
    },

    componentDidUpdate: function(){
        TodoApi.setTodos(this.state.todos);
    },

    handleAddTodo: function(text){  
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix()
                }
            ]
        });
    },

    handleToggle: function(id){
        var updatedTodos = this.state.todos.map(function(todo){
            
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todo: updatedTodos 
        });
    },

    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    
    render: function(){

        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;