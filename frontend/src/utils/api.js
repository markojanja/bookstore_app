import axios from 'axios';
import { logoutService, refreshTokenService } from './auth.js';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshTokenService();
        return api(originalRequest);
      } catch (refreshError) {
        // console.log('Token refresh failed:', refreshError);
        await logoutService();
        return Promise.reject(refreshError);
      }
    }

    if (error.response.status === 403) {
      try {
        await logoutService();
      } catch (logoutError) {
        // console.log('Logout failed:', logoutError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
