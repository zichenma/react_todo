import React from 'react';
import { Provider } from 'react-redux';
import  rootStore  from './store';
import  Todo  from './pages/todo';



const App = () => (
    <Provider store={rootStore}>
        <Todo />
    </Provider>
);

export default App;

