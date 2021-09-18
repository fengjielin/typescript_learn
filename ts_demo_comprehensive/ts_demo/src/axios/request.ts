import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class axiosRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    // 拦截器
    this.instance.interceptors.request.use(config => {
      return config;
    }, error => {
      console.log(error);
      return Promise.reject(error)
    })
    this.instance.interceptors.response.use(response => {
      return response;
    }, error => {
      console.log(error);
      return Promise.reject(error)
    })
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.request<any, T>(config).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      })
    })
  }
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  put<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" });
  }
  patch<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default axiosRequest;