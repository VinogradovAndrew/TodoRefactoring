const addTodo = (state = {text:''}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                text: '',
            };
        case 'TYPE_TODO_TEXT':
            return {
                text: action.text,
            };
        default:
            return state;
    }
};

export default addTodo;