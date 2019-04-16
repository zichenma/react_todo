import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getHandleItemDelete = index => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = data => ({
    type: INIT_LIST_ACTION,
    data
})
// 正常情况下，只能return一个对象，但是用thunk之后可以return一个函数

export const getTodoList = () => {
    return async (dispatch) => {
        const uri = `http://localhost:3200/`;
        const response = await axios.get(`${uri}todos`).catch(err => console.log(err));
        const data = response.data;
        const action = initListAction(data);
        dispatch(action);
    }
}

