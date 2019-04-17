import React from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';

const TodoList = (props) => {
    const { inputValue, 
            changeInputValue, 
            handleClick, 
            handleDelete, 
            list 
    } = props;

    return (
        <div>
            <div>
                <input type="text" 
                value={ inputValue }
                onChange={ changeInputValue }
                />
                <button onClick={ handleClick }>Add</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>{item}
                                <button onClick={() => handleDelete(index)} >Delete</button>
                            </li>
                            )
                    })
                }
            </ul>
        </div>
    ) 
}
// 怎么做连接在mapStateToProps里
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: [...state.list]
    }
}
// store.dispatch映射到了props上
const mapDispatchToProps = dispatch => {
    return {
        changeInputValue(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = getAddItemAction();
            dispatch(action);
        },
        handleDelete(index) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
}
// connect 让TodoList这个组件和Store进行连接
// connect 把一个UI组件（TodoList）和数据（mapStateToProps）和业务逻辑 （mapDispatchToProps）
// 相结合返回的内容就是一个容器组件了
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);