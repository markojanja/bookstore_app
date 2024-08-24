import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useDelete } from '../hooks/useDelete';
import Modal from '../components/Modal';
import LoadingScreen from '../components/LoadingScreen';
import { useModal } from '../hooks/useModal';
import ErrorPage from '../components/ErrorPage';
import useAuth from '../hooks/useAuth';
import InfoBox from '../components/InfoBox';

const Book = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { isVisible, toggleModal } = useModal();
  const { deleteItem } = useDelete();
  const { data: book, isLoading, error } = useFetch(`http://localhost:3000/books/${id}`);

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteItem(`http://localhost:3000/books/delete/${id}`);
  };

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorPage error={error} />;
  if (isVisible) return <Modal handleDelete={handleDelete} title={book.data.title} toggleModal={toggleModal} />;

  return (
    <div className="flex flex-col gap-3 w-4/6 mx-auto mt-5">
      {book && (
        <div className="flex flex-col gap-4 w-full mx-auto">
          <h2 className="text-2xl font-bold">{book.data.title}</h2>
          <p className="text-lg">{book.data.description}</p>
          <p className="text-lg">
            Author:
            <Link className="text-blue-500 pl-2" to={`/authors/${book.data.author._id}`}>
              {book.data.author.firstName} {book.data.author.lastName}
            </Link>
          </p>
          <p className="text-lg">
            Genre:
            <Link className="text-blue-500 pl-2" to={`/genres/${book.data.genre._id}`}>
              {book.data.genre.title}
            </Link>
          </p>
          <Link to={'/books'} className="text-blue-500 w-max py-2">
            back to books
          </Link>
        </div>
      )}
      {user && (
        <div className="flex gap-2 w-full mx-auto self-start">
          <Link className="bg-emerald-500 text-white px-3 py-2 rounded" to={`/books/update/${id}`}>
            update
          </Link>
          <button className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded" onClick={toggleModal}>
            delete
          </button>
        </div>
      )}
      {!user && <InfoBox message={'Must be logged in to edit book info'} />}
    </div>
  );
};

export default Book;
