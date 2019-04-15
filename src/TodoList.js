import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';
// 自动默认去找index.js
import store from './store';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';


class TodoList extends React.Component {
    state = store.getState();
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleInputChange (e) {
        const action = {
            // 意义在于 变量 出错IDE能报错，而简单的字符串则不能
            type: 'CHANGE_INPUT_VALUE',
            value: e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange () {
        this.setState(store.getState());
    }
    handleBtnClick() {
        const action = {
            type: 'ADD_TODO_ITEM'
        }
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = {
            type: 'DELETE_TODO_ITEM',
            index
        }
        store.dispatch(action);
    }
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft:'10px'}}> 
                <div>
                    <Input 
                    value={this.state.inputValue} 
                    placeholder="todo info" 
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleBtnClick} type="primary">Submit</Button>
                </div>
                <List style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item><Typography.Text mark></Typography.Text> {item} 
                    <button type="primary" onClick={this.handleItemDelete.bind(this, index)} style={{marginLeft: '10px'}}>Delete</button></List.Item>)}
                />
            </div>
        )
    }

}

export default TodoList;