import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingScreen from '../components/LoadingScreen';
import { useModal } from '../hooks/useModal';
import { useDelete } from '../hooks/useDelete';
import Modal from '../components/Modal';

const Author = () => {
  const { id } = useParams();
  const { isVisible, toggleModal } = useModal();
  const { deleteItem } = useDelete();

  const { data: author } = useFetch(`http://localhost:3000/authors/${id}`);
  const { data: books, isLoading } = useFetch(`http://localhost:3000/books/author/${id}`);

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteItem(`http://localhost:3000/authors/delete/${id}`);
  };

  if (isLoading) return <LoadingScreen />;
  if (isVisible)
    return (
      <Modal
        handleDelete={handleDelete}
        toggleModal={toggleModal}
        title={`${author.data.firstName} ${author.data.lastName}`}
      />
    );

  return (
    <div className="flex flex-col gap-4 w-4/6 mx-auto mt-5">
      {author && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {author.data.firstName} {author.data.lastName}
          </h2>
          <p className="text-lg">{author.data.bio}</p>
        </div>
      )}
      <ul className="flex flex-col gap-2">
        {books && books.data.length ? (
          <h3 className="text-xl font-bold">Books :</h3>
        ) : (
          <p>There are no boooks by this author</p>
        )}

        {books &&
          books.data.map((book) => (
            <li className="bg-emerald-400 text-lg w-full rounded p-3" key={book._id}>
              <Link to={`/books/${book._id}`} className="text-lg text-gray-800 font-semibold flex">
                {book.title}
              </Link>
            </li>
          ))}
      </ul>
      <div className="flex gap-2">
        <Link className="bg-emerald-500 text-white px-3 py-2 rounded w-max" to={`/authors/update/${id}`}>
          update
        </Link>
        {books && !books.data.length && (
          <button className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded" onClick={toggleModal}>
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Author;
