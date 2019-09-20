export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export interface SignInState {
    hasErrors: boolean,
    errors: string[],
    isLoading: boolean
}

export interface Credentials {
    email: string,
    password: string
}

interface SignInAction {
    type: typeof SIGN_IN,
    credentials: Credentials
}

interface SignInSucceessAction {
    type: typeof SIGN_IN_SUCCESS
}

interface SignInErrorAction {
    type: typeof SIGN_IN_ERROR,
    errors: string[]
}

export type SignInActionTypes = SignInAction | SignInSucceessAction | SignInErrorAction;