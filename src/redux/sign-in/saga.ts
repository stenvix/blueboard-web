import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { signInRequestCall } from './apiCalls';
import { signInSuccess, signInError } from './actions';
import { SIGN_IN, SignInActionTypes } from './types';

export function* signInRequest() {
    yield takeEvery(SIGN_IN, function* (action: any) {
        try {

            const loginResult = yield call(signInRequestCall, action.credentials);
            yield put(signInSuccess())

            // let currentUser = yield call(getCurrentUserRequestCall);
            // yield put({ type: actions.GET_CURRENT_USER_SUCCESS, currentUser })
        } catch (error) {
            console.log('Login Error -> ' + JSON.stringify(error));
            yield put(signInError([error.response.data.errors]))
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(signInRequest)
    ])
}