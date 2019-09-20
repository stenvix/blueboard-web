import { SignInState, SignInActionTypes, SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "./types";

const initialState: SignInState = {
    isLoading: false,
    errors: [],
    hasErrors: false
}

export function signInReducer(state = initialState, action: SignInActionTypes): SignInState {
    switch (action.type) {
        case SIGN_IN: {
            return { ...state, isLoading: true, hasErrors: false, errors: [] };
        }
        case SIGN_IN_SUCCESS: {
            return { ...state, isLoading: false, hasErrors: false, errors: [] }
        }
        case SIGN_IN_ERROR: {
            return { ...state, isLoading: false, hasErrors: true, errors: action.errors };
        }
        default: {
            return state;
        }
    }
}