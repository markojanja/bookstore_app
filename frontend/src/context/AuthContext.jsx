import { createContext, useState, useEffect } from 'react';
import { registerService, loginService, refreshTokenService, logoutService } from '../utils/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

      return user.user;
    } catch (error) {
      console.log('Registration failed:', error.response.data);
      setError(error.response.data.message);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await loginService(username, password);

      setUser(response.user.user);

      return response;
    } catch (error) {
      setError(error.response.data.message);
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

  return (
    <AuthContext.Provider value={{ user, loading, error, setError, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
