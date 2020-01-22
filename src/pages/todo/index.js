import React, {useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from './store';
import List from '../../common/List';


const Todo = () => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.todoReducer.toJS());
    const [value, setValue] = useState('');
    
    function handleOnchange (e) {
        setValue(e.target.value)
    }

    function handleAddItem() {
        actionCreators.addItem(dispatch, value);
        setValue('');
    }

    function handleRemoveItem(index) {
        actionCreators.removeItem(dispatch, index);
    }

    function handleItemChecked(index) {
        actionCreators.checkItem(dispatch, index);
    }

    return (
        <>
          <input type="text" value={value} onChange={handleOnchange} />
          <button onClick={handleAddItem}>+</button>
          <List items={list} handleClick={handleRemoveItem} isCompeted={false} handleChecked={handleItemChecked}/>
        </>
    )
}

export default Todo;



