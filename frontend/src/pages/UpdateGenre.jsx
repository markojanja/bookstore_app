import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GenreForm from '../components/GenreForm';
import LoadingScreen from '../components/LoadingScreen';

const UpdateGenre = () => {
  const [title, setTitle] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetch(`http://localhost:3000/genres/${id}`);

  useEffect(() => {
    if (data) {
      setTitle(data?.genre.title);
    }
  }, [data]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/genres/update/${id}`, {
        mode: 'cors',
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title }),
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  if (isLoading) return <LoadingScreen />;

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl">update genre</h2>
        <GenreForm handleChange={handleChange} handleFormSubmit={handleFormSubmit} title={title} label="save" />
      </div>
    </div>
  );
};

export default UpdateGenre;
