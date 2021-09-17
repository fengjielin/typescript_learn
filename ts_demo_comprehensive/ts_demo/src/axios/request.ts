import axios, { AxiosInstance, AxiosProxyConfig, AxiosRequestConfig } from "axios";

class axiosRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
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
    return this.request<T>({...config, method: "GET"});
  }
}

export default axiosRequest;