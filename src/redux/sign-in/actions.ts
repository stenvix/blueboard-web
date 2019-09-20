import { Credentials, SignInActionTypes, SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../sign-in/types";

export function signIn(credentials: Credentials): SignInActionTypes {
    return {
        type: SIGN_IN,
        credentials: credentials
    }
}

export function signInSuccess(): SignInActionTypes {
    return {
        type: SIGN_IN_SUCCESS
    }
}

export function signInError(errors: string[]): SignInActionTypes {
    return {
        type: SIGN_IN_ERROR,
        errors: errors
    }
}