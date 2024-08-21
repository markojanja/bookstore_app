import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenreForm from '../components/GenreForm';
import api from '../utils/api';

const CreateGenre = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const [err, setError] = useState();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await api.post(`/genres/create`, { title });
      navigate('/genres', { replace: true });
    } catch (error) {
      setError('Whoops something went wrong');
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-start pt-3">
      <h2 className="text-2xl">Add genre</h2>
      <GenreForm
        handleFormSubmit={handleFormSubmit}
        title={title}
        handleChange={handleChange}
        label="Add genre"
        err={err}
      />
    </div>
  );
};

export default CreateGenre;
