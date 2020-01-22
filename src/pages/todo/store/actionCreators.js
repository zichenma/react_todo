import * as constants from './actionTypes';



export const addItem  = (dispatch, payload) => {
    dispatch({
        type: constants.ADD_ITEM,
        payload
    })
}

export const removeItem = (dispatch, payload) => {
    dispatch({
        type: constants.REMOVE_ITEM,
        payload
    })
}

export const checkItem = (dispatch, payload) => {
    dispatch({
        type: constants.CHECK_ITEM,
        payload
    })
}