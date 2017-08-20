var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

//var TodoList = require('TodoList');
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

//var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo Component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do Something',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        },{
            id: 2,
            text: 'Check Mail',
            completed: false,
            completedAt: undefined,
            createdAt: 500 
        }];     

        var store = configure({
            todos: todos 
        });

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        );

        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        //var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length); 
    });
});