var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

    var {Todo} = require('Todo');

    describe('Todo', () => {
        it('should exist', () => {
            expect(Todo).toExist();
        });

        it('it should dispatch toggle todo action on click  ', ()=>{
            var todoDate = {
                id: 199,
                text: 'Write todo test.jsx',
                completed: true
            };

            var spy = expect.createSpy();
            var todo = TestUtils.renderIntoDocument(<Todo {...todoDate} dispatch={spy}/>);
            var $el  = $(ReactDOM.findDOMNode(todo));

            TestUtils.Simulate.click($el[0]);
            expect(spy).toHaveBeenCalledWith({
                type: 'TOGGLE_TODO',
                id: todoDate.id
            });
        });
});