export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export interface Credentials {
    login: string,
    password: string
}

export interface AuthState{

}

interface LoginAction {
    type: typeof LOGIN_REQUEST,
    credentials: Credentials
}

export type AuthActionTypes = LoginAction