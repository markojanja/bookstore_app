import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

export const useDelete = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const deleteItem = async (url) => {
    try {
      const response = await api.delete(url);
      navigate(-1, { replace: true });
    } catch (error) {
      setError('Whoops something went wrong');
      console.log(error);
    }
  };
  return { error, deleteItem };
};
