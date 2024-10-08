import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import BookForm from '../components/BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import api from '../utils/api';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading } = useFetch(`http://localhost:3000/books/${id}`);

  const { data: authorsData } = useFetch(`http://localhost:3000/authors/`);

  const { data: genresData } = useFetch(`http://localhost:3000/genres/`);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (book) {
      setTitle(book.data.title);
      setDescription(book.data.description);
      setPages(book.data.pages);
      setGenre(book.data.genre);
      setAuthor(book.data.author);
    }
    if (authorsData) {
      setAuthors(authorsData.data);
    }
    if (genresData) {
      setGenres(genresData.data);
    }
  }, [book, authorsData, genresData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = {
      title,
      description,
      pages,
      genre: genre,
      author: author,
    };

    try {
      await api.patch(`/books/update/${id}`, updatedBook);
      navigate('/books', { replace: true });
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };

  if (isLoading) return <LoadingScreen />;
  return (
    <div className="flex flex-col items-center justify-start gap-5">
      <h2 className="text-2xl">Update Book</h2>
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
        label={'Save'}
      />
    </div>
  );
};

export default UpdateBook;
