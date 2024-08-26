import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import LoadingScreen from './LoadingScreen';

const ProtectedPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) return <LoadingScreen />;

  return user ? <Outlet /> : null;
};

export default ProtectedPage;
