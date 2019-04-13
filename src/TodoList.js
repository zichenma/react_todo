import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';
// 自动默认去找index.js
import store from './store'


class TodoList extends React.Component {
    state = store.getState();
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft:'10px'}}> 
                <div>
                    <Input value={this.state.inputValue} placeholder="todo info" style={{width: '300px', marginRight: '10px'}}/>
                    <Button type="primary">Submit</Button>
                </div>
                <List style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList;