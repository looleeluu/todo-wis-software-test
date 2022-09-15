import axios, { AxiosInstance } from 'axios';

let instance: AxiosInstance | undefined;

export const getAxiosInstance = () => {
  if (!instance) {
    instance = axios.create({ baseURL: process.env.BACKEND_URL });
  }

  return instance;
};
