var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
//df freeze library makes sure that the functions we are using as reducers are pure functions in redux
//commit to test travis ci
describe('Reducers', () => {

    describe('searchTextReducers', () => {

        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText); 
        });
    });

    describe('showCompletedReducers', () => {
        
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            };

            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true); 
        });
    });

    describe('todosReducer', () => {
        
        it('should add a new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog',
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);  
        });

        it('Should toggle todo', () => {
            var todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];

            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };

            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });
    });
});