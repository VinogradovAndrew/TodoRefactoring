import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo, typeTodoText} from '../actions'
import {TextField, FloatingActionButton}from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddTodo = ({dispatch, addTodoText}) => (
    <div>
        <TextField name="todo"
                   style={{bottom: 10}}
                   hintText="Enter text"
                   value={addTodoText}
                   onChange={(e) => dispatch(typeTodoText(e.target.value))}/>
        <FloatingActionButton mini={true} onTouchTap={() => addTodoText && dispatch(addTodo(addTodoText))}>
            <ContentAdd />
        </FloatingActionButton>

    </div>
);
const mapStateToProps = (state) => {
    return {
        addTodoText: state.addTodo.text
    }
};

export default connect(mapStateToProps)(AddTodo);
