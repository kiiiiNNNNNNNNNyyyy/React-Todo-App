var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
});