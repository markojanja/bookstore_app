import { createContext, useState, useEffect } from 'react';
import { registerService, loginService, refreshTokenService, logoutService } from '../utils/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const { username, accessToken } = await refreshTokenService();
        setToken(accessToken);
        setUser(username);
      } catch (error) {
        console.log(error);
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, [user, token]);

  const register = async (username, password) => {
    try {
      await registerService(username, password);
      const { userData } = await loginService(username, password);
      setUser(userData);
    } catch (error) {
      console.log('registration failed: ', error);
    }
  };

  const login = async (username, password) => {
    try {
      const { userData, accessToken } = await loginService(username, password);

      setUser(userData);
      setToken(accessToken);
      console.log(accessToken);
    } catch (error) {
      console.log('error logging in: ', error);
    }
  };

  const logout = async () => {
    try {
      await logoutService();
      setUser(null);
      setToken(null);
    } catch (error) {
      console.log('error loggin out', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, token }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
