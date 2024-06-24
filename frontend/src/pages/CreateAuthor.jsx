import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

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
      await fetch(`http://localhost:3000/authors/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      navigate('/authors');
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
