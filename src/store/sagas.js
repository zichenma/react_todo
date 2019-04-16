import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';



// 在运用Saga之后， 不仅仅是reducer可以接收action, saga也可以接收action
// generator function
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

// 也可以是普通函数，但建议写成generator函数
// redux-saga doesn't support async generators, please use only regular ones
// using yeild no need to use async

function*  getInitList() {
   try {
        const uri = `http://localhost:3200/`;
        const res =  yield axios.get(`${uri}todos`);
        const data = res.data;
        const action = initListAction(data);
        // because there is no store.dispatch, change to put:
        yield  put(action);
   } catch(error) {
       console.error(error);
   }
}

export default mySaga;