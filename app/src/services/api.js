import axios from 'axios';
import auth from '../helpers/Auth'

const api = axios.create({
  baseURL: 'http://localhost:3333',
});


api.interceptors.request.use(
  async config => {
    const token = await auth.getToken();

    if (token) {
      config.headers.Authorization = token
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default api;
