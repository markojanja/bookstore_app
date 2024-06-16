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
    <div>
      {book && (
        <div>
          <h2>{book.data.title}</h2>
          <p>{book.data.description}</p>
          <p>
            {book.data.author.firstName} {book.data.author.lastName}
          </p>
          <p>{book.data.genre.title}</p>
          <Link to={"/books"}>back to books</Link>
        </div>
      )}
      <Link to={`/books/update/${id}`}>update</Link>
      <button onClick={() => setIsVisible(!isVisible)}>delete</button>
    </div>
  );
};

export default Book;
