import React, {Component} from 'react'
import RemoveIcon from 'material-ui/svg-icons/content/clear';
import {Checkbox, ListItem}from 'material-ui';

const Todo = ({toggleTodo, completed, text, removeTodo}) => (
    <ListItem style={{width: 250}}
              leftIcon={<Checkbox onCheck={toggleTodo} checked={completed}/>}
              children={text}
              rightIcon={<RemoveIcon onTouchTap={removeTodo}/>}/>
);

export default Todo