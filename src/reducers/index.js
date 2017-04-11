import {combineReducers} from 'redux'
import todos from './todos'
import addTodo from './addTodo'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    addTodo,
    todos,
    visibilityFilter
});

export default todoApp
