var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some Search text'
        };

        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        }
        
        var res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    });

    it('Should toggle when  todo completed', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('Should toggle todos', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: '123'
        };

        var res = actions.toggleTodos(action.id);

        expect(res).toEqual(action);
    });
})