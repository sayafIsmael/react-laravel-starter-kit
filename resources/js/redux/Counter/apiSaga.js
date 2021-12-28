import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from './actions';
import {postRequest, getCustomRequest, getRequest, deleteRequest} from '../../config/axiosClient'
import {message} from 'antd';


function* getCounter() {
  try {
    const response = yield call(() => getRequest('counter'));
    yield put({type: actions.GET_COUNTER_SUCCESS, payload: response.data});
  } catch (error) {
    console.log("error.response: ", error.response)
    yield put({type: actions.GET_COUNTER_FAILURE});
  }
}

function* updateCounter(action) {
  try {
    const response = yield call(() => postRequest('counter', action.payload));
    yield put({type: actions.UPDATE_COUNTER_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: actions.UPDATE_COUNTER_FAILURE});
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.GET_COUNTER, getCounter)]);
  yield all([takeLatest(actions.UPDATE_COUNTER, updateCounter)]);
}
