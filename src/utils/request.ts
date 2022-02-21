/**
 * axiox二次封装
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '../config'

//axiox实例
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
});

//请求拦截
service.interceptors.request.use((req: AxiosRequestConfig) => {
  return req;
});

//响应拦截
service.interceptors.response.use((res: AxiosResponse) => {
  return res.data;
});

const request = (options: any) => {
  options.method = options.method || 'get';
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  let isMock = config.mock;
  if (typeof options.mock != 'undefined') {
    isMock = options.mock;
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }
  return service(options);
};

export default request;