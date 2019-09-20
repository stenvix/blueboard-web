import { AxiosRequestConfig } from "axios";

export const ApiConfig = (): AxiosRequestConfig => ({
    baseURL: 'http://localhost:5000/api/v1/',
    timeout: 20000,
    withCredentials: false,
    responseType: 'json',
});