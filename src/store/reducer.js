import {
    CHANGE_INPUT_VALUE, 
    ADD_TODO_ITEM, 
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION} from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
};

// reducer 可以接受state，但是绝对不能修改state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // deep copy
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...action.data];
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push({value: newState.inputValue, isComplete: false});
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}