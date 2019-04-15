import React, { Fragment } from 'react';
import store from './store';
import TodoItems from './TodoItems';


class TodoList extends React.Component {
    state =  store.getState();

    constructor(props) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        store.subscribe(this.handleStateChange);
    }
    render () {
       return (
            <Fragment>
            <input type='text' value={this.state.inputValue} onChange={this.handleInputChange} />
            <button onClick={this.addTodoItem}>Add</button>
            <ul>
                {this.getListItems()}
            </ul>
           </Fragment>
       )
    }

    getListItems () {
        return  this.state.items.map((item, index) => {
            return <TodoItems content={item} key={index} index={index} deleteTodoItem={this.deleteTodoItem} />
        })
    }

    handleStateChange () {
        this.setState(store.getState());
    }

    handleInputChange(e) {
        const action = {
            type: 'input_change',
            payload: {
                value: e.target.value
            }
        }
        store.dispatch(action);
    }

    addTodoItem () {
        const action = {
            type: 'add_item'
        }
        store.dispatch(action);
    }

    deleteTodoItem (index) {
       const action = {
           type : 'delete_item',
           payload: {
               value: index
           }
       }
       store.dispatch(action);
    }


}

export default TodoList;