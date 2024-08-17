import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingScreen from '../components/LoadingScreen';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { useDelete } from '../hooks/useDelete';
import BookList from '../components/BookList';
import ErrorPage from '../components/ErrorPage';
import useAuth from '../hooks/useAuth';

const Genre = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`http://localhost:3000/genres/${id}`);
  const { isVisible, toggleModal } = useModal();
  const { error: err, deleteItem } = useDelete();

  const hasBooks = data && data.books.length;

  const handleDelete = async () => {
    await deleteItem(`http://localhost:3000/genres/delete/${id}`);
  };

  if (isVisible) return <Modal handleDelete={handleDelete} toggleModal={toggleModal} title={data.genre.title} />;
  if (error) return <ErrorPage error={error} />;
  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex flex-col gap-4 w-4/6 mx-auto mt-5">
      <h2 className="text-2xl font-bold">{data.genre?.title}</h2>

      <BookList data={data} hasBooks={hasBooks} message={'There are no books under this genre'} />

      {user && (
        <div className="flex gap-2">
          <Link className="bg-emerald-500 text-white px-3 py-2 rounded w-max" to={`/genres/update/${data.genre?._id}`}>
            Update
          </Link>
          {!hasBooks && (
            <button className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded" onClick={toggleModal}>
              delete
            </button>
          )}
        </div>
      )}

      {!user && (
        <p className="bg-blue-200 border border-blue-500 rounded p-5 text-blue-500 w-1/2">
          must be logged in to update genre
        </p>
      )}
    </div>
  );
};

export default Genre;
