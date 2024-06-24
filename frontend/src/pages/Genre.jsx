import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingScreen from '../components/LoadingScreen';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { useDelete } from '../hooks/useDelete';

const Genre = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`http://localhost:3000/genres/${id}`);
  const { isVisible, toggleModal } = useModal();
  const { error, deleteItem } = useDelete();

  const handleDelete = async () => {
    await deleteItem(`http://localhost:3000/genres/delete/${id}`);
  };
  if (isVisible)
    return (
      <Modal
        handleDelete={handleDelete}
        toggleModal={toggleModal}
        title={data.genre.title}
      />
    );

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex flex-col gap-4 w-4/6 mx-auto mt-5">
      <h2 className="text-2xl font-bold">{data.genre?.title}</h2>

      {data.books.length ? (
        <ul className="flex flex-col gap-7 items-start justify-center">
          <h3 className="text-xl font-bold">Books in genre:</h3>
          {data.books?.map((book) => (
            <li
              className="bg-emerald-400 text-lg w-full rounded p-3"
              key={book._id}
            >
              <Link
                className="text-lg text-gray-800 font-semibold flex"
                to={`/books/${book._id}`}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">
          There are no books currently under {data.genre?.title} genre
        </p>
      )}

      <div className="flex gap-2">
        <Link
          className="bg-emerald-500 text-white px-3 py-2 rounded w-max"
          to={`/genres/update/${data.genre?._id}`}
        >
          Update
        </Link>
        {!data.books.length && (
          <button
            className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded"
            onClick={toggleModal}
          >
            delete
          </button>
        )}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Genre;
