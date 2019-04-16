import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';


const App = (
    // Provider 连接了store，那么Provider里面所有的组件，都有能力
    // 获取到store的内容
    <Provider store={store}>
        <TodoList />
    </Provider>
);

ReactDOM.render(App, document.querySelector('#root'));

