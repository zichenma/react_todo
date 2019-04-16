import React from 'react';
// 自动默认去找index.js
import axios from 'axios';
import store from './store';
import { 
    getInputChangeAction, 
    getAddItemAction, 
    getHandleItemDelete,
    getInitList
    } 
from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends React.Component {
    state = store.getState();
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange (e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange () {
        this.setState(store.getState());
    }
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = getHandleItemDelete(index);
        store.dispatch(action);
    }
    render() {
        return <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
        />;
    }

    componentDidMount () {
        const action = getInitList();
        store.dispatch(action);
        console.log(action);
    }

    async getTodoList () {
        // const uri = `http://localhost:3200/`;
        // const response = await axios.get(`${uri}todos`)
        //       .catch(err => console.error(err));
        // const data = response.data;
        // const action = initListAction(data);
        // store.dispatch(action);
    }


  

}

export default TodoList;