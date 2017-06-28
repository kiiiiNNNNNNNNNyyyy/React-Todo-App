var expect = require('expect');
var TodoApi = require('TodoApi');

describe('TodpoApi', () => {
    
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApi).toExist();
    }); 

    describe('setTodos', () => {
        it('should set a valid todo array', () => {
            var todos = [{
                id: 23,
                text: "test files",
                completed: false
            }];

            TodoApi.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid array', () => {
            var badTodos = {a: 'b'};
            TodoApi.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('setTodos', () => {
        it('should return an empty array for bad localStorage data', () => {
            var actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localstorage', () => {
            var todos = [{
                id: 23,
                text: "test files",
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filteredTodos', () => {
        var todos = [{
            id: 1,
            text: "SomeText",
            completed: true
        },{
            id: 2 ,
            text: "Some thing",
            completed: false
        }, {
            id: 3,
            text: "SomeText",
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return uncompleted todo when showCompleted is false', () => {
            var filteredTodos = TodoApi.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        })
    });
});
