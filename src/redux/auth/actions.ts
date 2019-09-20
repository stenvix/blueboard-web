import { Credentials, LOGIN_REQUEST, AuthActionTypes } from './types';


export function login(credentials: Credentials) : AuthActionTypes {
    return {
        type: LOGIN_REQUEST,
        credentials
    }
}