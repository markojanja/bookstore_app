import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Modal from "../components/Modal";

const Book = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: book,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/books/delete/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (isVisible)
    return (
      <Modal
        handleDelete={handleDelete}
        id={id}
        title={book.data.title}
        setIsVisible={setIsVisible}
      />
    );

  return (
    <div className="flex flex-col gap-3 w-4/6 mx-auto mt-5">
      {book && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{book.data.title}</h2>
          <p>{book.data.description}</p>
          <p>
            Author: {book.data.author.firstName} {book.data.author.lastName}
          </p>
          <p>Genre: {book.data.genre.title}</p>
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
          onClick={() => setIsVisible(!isVisible)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Book;
