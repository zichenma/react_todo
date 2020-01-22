import { fromJS } from  'immutable';
import * as constants from './actionTypes';

const todoState = fromJS({
        isCompleted : false,
        inputValue : '',
        list: []
})

const todoReducer = function(state = todoState, action) {
   
    switch (action.type) {
        case constants.ADD_ITEM: 
            const list = state.get('list');
            const inputValue = action.payload;
            return state.set('list', [...list, {inputValue, isCompleted : false}]);
        case constants.REMOVE_ITEM:  {
            const list = state.get('list');
            console.log(action.payload);
            const newList = list.splice(action.payload, 1);
            console.log(newList)
            return state.merge({'list' : newList});
        }
        case constants.CHECK_ITEM:
            return state;
        default:
            return state;
    }
}

export default todoReducer;