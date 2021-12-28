import { all } from 'redux-saga/effects';
import authenticateSaga from './Authenticate/apiSaga';
import counterSaga from './Counter/apiSaga';

// Here you can include all the saga which you write for components
export default function* rootSaga(){
  yield all([
    authenticateSaga(),
    counterSaga()
  ]);
}
