const defaultState = {
    inputValue : '',
    items: []
}

export default (state = defaultState, action) => {
    if (action.type === 'input_change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.payload.value;
        return newState;
    }

    if (action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.items = [...state.items, newState.inputValue];
        newState.inputValue = '';
        return newState;
    }

    if (action.type === 'delete_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.items.splice(action.payload.value, 1);
        return newState;
    }

    return state;
}

