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

    function handleItemChecked(e, index) {
        actionCreators.checkItem(dispatch, {idx : index, isCompleted : e.target.checked});
    }

    return (
        <>
          <input type="text" value={value} onChange={handleOnchange} />
          <button onClick={handleAddItem}>+</button>
          <List items={list} handleClick={handleRemoveItem}  handleChecked={handleItemChecked}/>
        </>
    )
}

export default Todo;



