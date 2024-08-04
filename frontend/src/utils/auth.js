import axios from 'axios';
import api from './api.js';

const API_URL = 'http://localhost:3000';

export const registerService = async ({ username, password }) => {
  try {
    await axios.post(`${API_URL}/register`, { username, password }, { withCredentials: true });
  } catch (error) {
    console.log('Registration error: ', error);
    throw error;
  }
};

export const loginService = async ({ username, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password }, { withCredentials: true });
    const { accessToken } = response.data;
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return response.data;
  } catch (error) {
    console.log('Login error:', error);
    throw error;
  }
};

export const refreshTokenService = async () => {
  try {
    const response = await axios.post(`${API_URL}/refresh-token`, {}, { withCredentials: true });
    const { accessToken } = response.data;
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return response.data;
  } catch (error) {
    console.error('refresh token error:', error);
    throw error;
  }
};

export const logoutService = async () => {
  try {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    delete api.defaults.headers.common['Authorization'];
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};
