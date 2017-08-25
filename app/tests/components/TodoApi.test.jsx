var expect = require('expect');
var TodoApi = require('TodoApi');

describe('TodpoApi', () => {
    
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApi).toExist();
    }); 

    describe('filteredTodos', () => {
        var todos = [{
            id: 1,
            text: "Some Text",
            completed: true
        },{
            id: 2 ,
            text: "one thing",
            completed: false
        }, {
            id: 3,
            text: "Some Text",
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return uncompleted todo when showCompleted is false', () => {
            var filteredTodos = TodoApi.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by search text', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, "some");
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if search text is empty', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});
