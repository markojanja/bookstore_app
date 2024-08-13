import axios from 'axios';
import { logoutService, refreshTokenService } from './auth.js';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const orifinalRequest = error.config;

    if (error.response.status === 401 && !orifinalRequest._retry) {
      orifinalRequest._retry = true;

      try {
        const { data } = await refreshTokenService();
        api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        orifinalRequest.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

        return api(orifinalRequest);
      } catch (error) {
        console.log(error);

        return Promise.reject(error);
      }
    }
    if (error.response.status === 403) {
      try {
        await logoutService();
      } catch (error) {
        console.log('logout failed');
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
