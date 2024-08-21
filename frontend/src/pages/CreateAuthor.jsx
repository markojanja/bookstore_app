import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import api from '../utils/api';

const CreateAuthor = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      bio,
    };

    try {
      const response = await api.post(`/authors/create/`, data);
      navigate('/authors', { replace: true });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-start pt-3">
      <h2 className="text-2xl">Add Author</h2>
      <AuthorForm
        handleFormSubmit={handleFormSubmit}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setBio={setBio}
        firstName={firstName}
        lastName={lastName}
        bio={bio}
        label={'add author'}
      />
    </div>
  );
};

export default CreateAuthor;
