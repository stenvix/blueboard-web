import axios from 'axios';
import { Credentials } from '../auth/types';
import { ApiConfig } from '../../config/constants';

export const signInRequestCall = (credentials: any) => {
    return axios({
        ...ApiConfig(),
        url: 'auth/sign-in',
        method: "POST",
        data: credentials
    }).then(response => {
        return response.data;
    }).catch(err => {
        throw err;
    });
}