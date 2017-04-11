import React from 'react'
import Todo from './Todo';
import {List}from 'material-ui';

const TodoList = ({todos, toggleTodo, removeTodo}) => (
    <List>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                toggleTodo={() => toggleTodo(todo.id)}
                removeTodo={() => removeTodo(todo.id)}
            />
        )}
    </List>
);

export default TodoList

