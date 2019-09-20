import { AuthState, AuthActionTypes, LOGIN_REQUEST } from "./types";


const initialState: AuthState = {};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
            }
        }
        default: {
            return state;
        }
    }
}