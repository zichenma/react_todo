const defaultState = {
    inputValue: '1,2,3',
    list: [1,2,3]
};

// reducer 可以接受state，但是绝对不能修改state
export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        // deep copy
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}