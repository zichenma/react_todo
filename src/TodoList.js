import React, {Fragment} from 'react';
import List from './List';
import axios from 'axios';
import './style.css';

class TodoList extends React.Component {
    // when state or props change, render function will run
    state = {list:[], inputValue: ''};

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    
    // 在组件即将被挂载到页面时候自动执行
    // componentWillMount () {
    //     console.log('willMount');
    // }

    // 组件被挂载到页面之后执行
    // componentDidMount () {
    //     console.log('didMount');
    // }
    
    // 组件被更新之前，它会自动执行， 返回一个布尔值， 如果返回false, 组件则不会更新
    // shouldComponentUpdate () {
    //     console.log('shouldComponentUpdate');
    //     return true;
    // }
    
    // 组件被跟新之前（render 前），会自动执行，但是会在shouldComponent之后被执行，
    // 如果shouldComponentUpdate返回true
    // 它才执行，如果返回false则不会被执行
    // componentWillUpdate () {
    //     console.log('componentWillUpdate');
    // }
    
    // 组件更新完成之后，它会被执行
    // componentDidUpdate () {
    //     console.log('componentDidUpdate');
    // }

    handleBtnClick () {
        if (!this.state.inputValue || !this.state.inputValue.trim()) {
            return;
        }
        // Version 15:
        // let item = {value: this.state.inputValue, isComplete: false};
        // this.setState({
        //         list: [...this.state.list, item],
        //         inputValue : ''
        // })
        this.setState( prevState => {
            let item = {value: prevState.inputValue, isComplete: false};
            return {
                list: [...prevState.list, item],
                inputValue : ''
            }
        })
    }

    handleInputChange (e) {
        // Versin 15:
        //this.setState({inputValue : e.target.value})
        //can use ref to replace e.target
        //const value = this.input.value;
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
        
    }

    handleItemDelete (index) {
        // Version 15:
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list
        // })
        this.setState(prevState => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }

    componentDidMount() {
        this.getTodos();
    }

    async getTodos() {
        const uri = `http://localhost:3200/`;
        const response = await axios.get(`${uri}todos`).catch(err => console.log(err));
        // 最佳写法：
        this.setState(() => ({
                list: [...response.data]
        }))
        // same as:
        // await axios.get(`${uri}todos`)
        // .then(res => this.setState(() => {
        //     return {
        //         list: res.data
        //     }
        // }))    
    }

    render () {
        return (
            <Fragment>
                <label htmlFor="insertArea">Input:</label>
                <input id="insertArea" 
                className="input" 
                type="text" 
                value={this.state.inputValue} 
                onChange={this.handleInputChange}
                />
                {/* ref={input => {this.input = input}}/> */}
                <button onClick={this.handleBtnClick}>Submit</button>
                <List list={this.state.list} handleItemDelete={this.handleItemDelete}/>
            </Fragment>
            
          
        )
    }
}

export default TodoList;