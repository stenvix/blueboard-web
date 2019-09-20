import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { authReducer } from './auth/reducer';
import { signInReducer } from './sign-in/reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../redux/sagas';

const rootReducer = combineReducers({
    signIn: signInReducer,
    auth: authReducer
})

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )

    sagaMiddleware.run(rootSaga);
    return store;
};
