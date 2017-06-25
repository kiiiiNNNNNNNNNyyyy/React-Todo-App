var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var TodoText = 'test Text';
        var todoApps = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApps.setState({todos: []});
        todoApps.handleAddTodo(TodoText);

        expect(todoApps.state.todos[0].text).toBe(TodoText);
    });
}); 