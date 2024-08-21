import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import api from '../utils/api';
import axios from 'axios';

const CreateBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/authors');
        setAuthors(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:3000/genres');
        setGenres(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGenres();
    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      pages,
      genre,
      author,
    };
    try {
      const response = await api.post(`/books/create`, data);
      navigate('/books', { replace: true });
      return response.data;
    } catch (error) {
      // Optionally log the error or handle it in a specific way
      console.error('Error creating book:', error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-start pt-3">
      <h2 className="text-2xl">Add Book</h2>
      <BookForm
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setDescription={setDescription}
        setPages={setPages}
        setGenre={setGenre}
        setAuthor={setAuthor}
        title={title}
        description={description}
        pages={pages}
        genre={genre}
        author={author}
        genres={genres}
        authors={authors}
        label={'Add book'}
      />
    </div>
  );
};

export default CreateBook;
