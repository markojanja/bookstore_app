import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import useAuth from '../hooks/useAuth';

const CreateBook = () => {
  const { token } = useAuth();
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
        const res = await fetch('http://localhost:3000/authors/', {
          mode: 'cors',
        });
        const authorsData = await res.json();
        setAuthors(authorsData.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGenres = async () => {
      try {
        const res = await fetch('http://localhost:3000/genres/');
        const genresData = await res.json();
        setGenres(genresData.data);
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
      await fetch('http://localhost:3000/books/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      navigate('/books');
    } catch (error) {
      console.log(error);
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
