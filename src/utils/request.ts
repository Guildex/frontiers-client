import axiosBase from 'axios';
import type { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
// TODO: 型つくる
type RequestPaths = string;
type Payload = AxiosRequestConfig['params'];
type Options = AxiosRequestConfig;

const axios = axiosBase.create({
  timeout: 30000,
});

const handleSuccess = <T = unknown>(response: AxiosResponse<T>) => {
  return response;
};

const handleError = <T = never>(error: AxiosError): Promise<T> => {
  return Promise.reject<T>(error);
};

axios.interceptors.response.use(handleSuccess, handleError);

const get = <T = unknown>(url: RequestPaths, payload: Payload = {}, options: Options = {}) => {
  return axios.get<T>(url, {
    ...options,
    params: payload,
  });
};

const patch = <T = unknown>(url: RequestPaths, payload: Payload, options: Options = {}) => {
  return axios.request<T>({
    ...options,
    method: 'PATCH',
    url,
    responseType: 'json',
    data: payload,
  });
};

const post = <T = unknown>(url: RequestPaths, payload: Payload, options: Options = {}) => {
  return axios.request<T>({
    ...options,
    method: 'POST',
    url,
    responseType: 'json',
    data: payload,
  });
};

const put = <T = unknown>(url: RequestPaths, payload: Payload, options: Options = {}) => {
  return axios.request<T>({
    ...options,
    method: 'PUT',
    url,
    responseType: 'json',
    data: payload,
  });
};

const _delete = <T = unknown>(url: RequestPaths, payload?: Payload, options: Options = {}) => {
  return axios.request<T>({
    ...options,
    method: 'DELETE',
    url,
    responseType: 'json',
    data: payload,
  });
};

export const request = {
  get,
  patch,
  post,
  put,
  delete: _delete,
};
