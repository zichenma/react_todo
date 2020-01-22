import { combineReducers } from 'redux';
import { todoReducer } from '../pages/todo/store';

const reducer = combineReducers({
    todoReducer
})

export default reducer;