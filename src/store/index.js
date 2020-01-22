import { createStore } from 'redux';
import  reducer  from './reducer';


const rootStore = createStore(reducer);

export default rootStore;