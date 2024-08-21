import { createContext, useState, useEffect } from 'react';
import { registerService, loginService, refreshTokenService, logoutService } from '../utils/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const { username } = await refreshTokenService();
        setUser(username);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, []);

  const register = async (username, password) => {
    try {
      await registerService(username, password);
      const { user } = await loginService(username, password);
      setUser(user.user);
    } catch (error) {
      console.log('Registration failed:', error);
    }
  };

  const login = async (username, password) => {
    try {
      const { user } = await loginService(username, password);

      setUser(user.user);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logout = async () => {
    try {
      await logoutService();
      setUser(null);
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return <AuthContext.Provider value={{ user, loading, register, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
