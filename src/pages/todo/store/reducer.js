import { fromJS } from  'immutable';
import * as constants from './actionTypes';

const todoState = fromJS({
    list: []
})

// function getNewList (list, index) {
//     return list.filter((item, itemIndex) => itemIndex !== index)
// }

function updateComplete(list, index) {
    const target = list.find((item, itemIndex) => itemIndex === index);
    return target;
  }

const todoReducer = function(state = todoState, action) {
    const list = state.get('list');
    switch (action.type) {
        case constants.ADD_ITEM: 
            const inputValue = action.payload;
            return state.set('list', [...list, {inputValue, isCompleted : false}]);
        case constants.REMOVE_ITEM:  {
            const index = action.payload;
            // works the same:
            // const newList = getNewList (list, index);
            const newList = [...list];
            newList.splice(index, 1);
            return state.set('list', newList);
        }
        case constants.CHECK_ITEM: {
            const newList = [...list];
            const { idx, isCompleted}  = action.payload;
            const targetItem = updateComplete(newList, idx);
            targetItem.isCompleted = isCompleted;
            return state.set('list', newList);
        }
        default:
            return state;
    }
}

export default todoReducer;