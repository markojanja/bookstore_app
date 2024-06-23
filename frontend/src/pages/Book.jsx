import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDelete } from "../hooks/useDelete";
import Modal from "../components/Modal";
import LoadingScreen from "../components/LoadingScreen";
import { useModal } from "../hooks/useModal";

const Book = () => {
  const { id } = useParams();
  const { isVisible, toggleModal } = useModal();
  const { error, deleteItem } = useDelete();
  const { data: book, isLoading } = useFetch(
    `http://localhost:3000/books/${id}`
  );

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteItem(`http://localhost:3000/books/delete/${id}`);
  };

  if (isLoading) return <LoadingScreen />;
  if (error) return <h1>{error}</h1>;
  if (isVisible)
    return (
      <Modal
        handleDelete={handleDelete}
        title={book.data.title}
        toggleModal={toggleModal}
      />
    );

  return (
    <div className="flex flex-col gap-3 w-4/6 mx-auto mt-5">
      {book && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{book.data.title}</h2>
          <p className="text-lg">{book.data.description}</p>
          <p className="text-lg">
            Author: {book.data.author.firstName} {book.data.author.lastName}
          </p>
          <p className="text-lg">Genre: {book.data.genre.title}</p>
          <Link to={"/books"} className="text-blue-500 w-max py-2">
            back to books
          </Link>
        </div>
      )}
      <div className="flex gap-2">
        <Link
          className="bg-emerald-500 text-white px-3 py-2 rounded"
          to={`/books/update/${id}`}
        >
          update
        </Link>
        <button
          className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded"
          onClick={toggleModal}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Book;
