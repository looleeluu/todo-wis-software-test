import { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { getAxiosInstance } from './axios-instance';

type CustomRequestConfig = Omit<AxiosRequestConfig, 'method'>;

export class APIClient {
  private _instance: AxiosInstance;

  constructor(instance: AxiosInstance = getAxiosInstance()) {
    this._instance = instance;
  }

  async request<SourceType>(uri: string, options: AxiosRequestConfig = {}) {
    const headers: AxiosRequestHeaders = {
      'Content-Type': 'application/json',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Access-Control-Allow-Origin': '*',
      ...options.headers,
    };
    const url = `/${uri}`;

    return this._instance.request<SourceType>({
      url,
      headers,
      ...options,
    });
  }

  async post<SourceType>(uri: string, options: CustomRequestConfig = {}) {
    return this.request<SourceType>(uri, {
      ...options,
      method: 'POST',
    });
  }

  async get<SourceType>(uri: string, options: CustomRequestConfig = {}) {
    return this.request<SourceType>(uri, {
      ...options,
      method: 'GET',
    });
  }
}

let apiClient: APIClient | undefined;

export const getAPIClient = () => {
  if (!apiClient) {
    apiClient = new APIClient();
  }

  return apiClient;
};
