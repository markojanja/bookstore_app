import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingScreen from "../components/LoadingScreen";
import { useModal } from "../hooks/useModal";
import { useDelete } from "../hooks/useDelete";
import Modal from "../components/Modal";

const Author = () => {
  const { id } = useParams();
  const { isVisible, toggleModal } = useModal();
  const { deleteItem } = useDelete();

  const { data: author } = useFetch(`http://localhost:3000/authors/${id}`);
  const { data: books, isLoading } = useFetch(
    `http://localhost:3000/books/author/${id}`
  );

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
    <div className="flex flex-col gap-3 w-4/6 mx-auto mt-5">
      {author && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {author.data.firstName} {author.data.lastName}
          </h2>
          <p className="text-lg">{author.data.bio}</p>
        </div>
      )}
      <ul>
        {books && books.data.length ? (
          <h3 className="text-xl font-bold">Books :</h3>
        ) : (
          <p>There are no boooks by this author</p>
        )}

        {books &&
          books.data.map((book) => (
            <li className="text-lg" key={book._id}>
              {book.title}
            </li>
          ))}
      </ul>
      <div className="flex gap-2">
        <Link
          className="bg-emerald-500 text-white px-3 py-2 rounded w-max"
          to={`/authors/update/${id}`}
        >
          update
        </Link>
        {books && !books.data.length && (
          <button
            className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded"
            onClick={toggleModal}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Author;
