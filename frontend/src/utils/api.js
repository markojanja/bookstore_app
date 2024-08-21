import axios from 'axios';
import { logoutService, refreshTokenService } from './auth.js';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // Ensure cookies are sent with requests
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If we get a 401 error, try refreshing the token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await refreshTokenService();
        // The server should update the cookie with the new access token

        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        console.log('Token refresh failed:', refreshError);
        await logoutService(); // Log out if refresh fails
        return Promise.reject(refreshError);
      }
    }

    // Handle other types of errors
    if (error.response.status === 403) {
      try {
        await logoutService();
      } catch (logoutError) {
        console.log('Logout failed:', logoutError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
