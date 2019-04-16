import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

class TodoList extends Component {

    // state = store.getState();
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputValue}/>
                    <button>Add</button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
// 让TodoList这个组件和Store进行连接
export default connect(null, null)(TodoList);