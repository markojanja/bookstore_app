import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingScreen from '../components/LoadingScreen';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { useDelete } from '../hooks/useDelete';
import BookList from '../components/BookList';

const Genre = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`http://localhost:3000/genres/${id}`);
  const { isVisible, toggleModal } = useModal();
  const { error, deleteItem } = useDelete();

  const hasBooks = data && data.books.length;

  const handleDelete = async () => {
    await deleteItem(`http://localhost:3000/genres/delete/${id}`);
  };

  if (isVisible) return <Modal handleDelete={handleDelete} toggleModal={toggleModal} title={data.genre.title} />;

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex flex-col gap-4 w-4/6 mx-auto mt-5">
      <h2 className="text-2xl font-bold">{data.genre?.title}</h2>

      <BookList data={data} hasBooks={hasBooks} message={'There are no books under this genre'} />

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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Genre;
