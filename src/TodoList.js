import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft:'10px'}}> 
                <div>
                    <Input placeholder="todo info" style={{width: '300px', marginRight: '10px'}}/>
                    <Button type="primary">Submit</Button>
                </div>
                <List style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList;