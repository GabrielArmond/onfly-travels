import axios, { type AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({
  baseURL: '/public/db',
  headers: { "Content-Type": "application/json" }
});

if (process.env.NODE_ENV !== 'test') {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error?.toString()?.includes('Network') ||
        (error.request._hasError === true && error.request._response.includes('connect'))
      ) {
        return Promise.reject(new Error('Ocorreu um erro ao acessar o sistema.'))
      }
      if (error.response?.status === 401 || error.response?.status === 403) {
        return Promise.reject(new Error('Sessão Expirada! Faça login novamente.'))
      }
      return Promise.reject(new Error(
        error?.response?.data?.message || error?.response?.data || error?.response)
      )
    }
  )
}

export { api };
