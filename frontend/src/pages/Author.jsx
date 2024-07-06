import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useModal } from '../hooks/useModal';
import { useDelete } from '../hooks/useDelete';
import Modal from '../components/Modal';
import LoadingScreen from '../components/LoadingScreen';
import BookList from '../components/BookList';

const Author = () => {
  const { id } = useParams();
  const { isVisible, toggleModal } = useModal();
  const { deleteItem } = useDelete();

  const { data: author, isLoading, error } = useFetch(`http://localhost:3000/authors/${id}`);

  const hasBooks = author && author.books.length;

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

      <BookList data={author} hasBooks={hasBooks} message={'There are no boooks by this author'} />

      <div className="flex gap-2">
        <Link className="bg-emerald-500 text-white px-3 py-2 rounded w-max" to={`/authors/update/${id}`}>
          update
        </Link>
        {!hasBooks && (
          <button className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded" onClick={toggleModal}>
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Author;
