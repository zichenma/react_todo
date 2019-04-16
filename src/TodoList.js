import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" 
                    value={this.props.inputValue}
                    onChange={this.props.changeInputValue}
                    />
                    <button onClick={this.handleClick}>Add</button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        )
    }

    handleClick() {

    }
}
// 怎么做连接在mapStateToProps里
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
// store.dispatch映射到了props上
const mapDispatchToProps = dispatch => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        }
    }
}
// connect 让TodoList这个组件和Store进行连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);