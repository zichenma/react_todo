import React from 'react';
import { Input, Button, List, Typography } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = ({inputValue, list, handleBtnClick, handleInputChange, handleItemDelete}) => {

        return (
               <div style={{marginTop: '10px', marginLeft:'10px'}}> 
                    <div>
                        <Input 
                        value={inputValue} 
                        placeholder="todo info" 
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={handleInputChange}
                        />
                        <Button onClick={handleBtnClick} type="primary">Submit</Button>
                    </div>
                    <List style={{marginTop: '10px', width: '300px'}}
                        bordered
                        dataSource={list}
                        renderItem={(item, index) => (<List.Item><Typography.Text mark></Typography.Text> {item.value} 
                        <button type="primary" onClick={() => {handleItemDelete(index)}} style={{marginLeft: '10px'}}>Delete</button></List.Item>)}
                    />
                </div>
        )
    
}
export default TodoListUI;