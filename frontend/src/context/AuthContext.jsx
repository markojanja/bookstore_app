import { createContext, useState, useEffect } from 'react';
import { registerService, loginService, refreshTokenService, logoutService } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const { username } = await refreshTokenService();
        setUser(username);
      } catch (error) {
        console.log(error);
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
      const { userData } = await loginService(username, password);
      setUser(userData);
    } catch (error) {
      console.log('registration failed: ', error);
    }
  };

  const login = async (username, password) => {
    try {
      const { userData } = await loginService(username, password);
      setUser(userData);
      navigate('/', { replace: true });
    } catch (error) {
      console.log('error logging in: ', error);
    }
  };

  const logout = async () => {
    try {
      await logoutService();
      setUser(null);
      navigate('/', { replace: true });
    } catch (error) {
      console.log('error loggin out', error);
    }
  };

  return <AuthProvider.Provider value={{ user, loading, register, login, logout }}>{children}</AuthProvider.Provider>;
};

export { AuthContext, AuthProvider };
