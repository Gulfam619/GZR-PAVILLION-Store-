import axios from "axios";
import { getCookie } from "cookies-next";
export const baseDomain = "https://dummyjson.com";
// export const baseDomain ="http://localhost:8080";
// export const baseDomain = "http://16.171.148.251:9000/";

export const axiosInstance = axios.create({
  baseURL: baseDomain,
  // timeout: 15000,
});

const ResponseInterceptor = (response) => {
  return response;
};

const RequestInterceptor = (config) => {
  config.headers.token = getCookie("token");
   return config;
};
axiosInstance.interceptors.request.use(RequestInterceptor);
axiosInstance.interceptors.response.use(ResponseInterceptor, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 509;
  if (!expectedErrors) {
    return Promise.reject(error.response);
  } else {
    return Promise.reject(error.response);
  }
});