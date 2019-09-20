import { all } from 'redux-saga/effects';
import signInSaga from './sign-in/saga';

export default function* rootSaga() {
    yield all([signInSaga()])
}