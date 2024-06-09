import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/books/${id}`, {
          mode: "cors",
        });
        const data = await resp.json();

        if (!resp.ok) {
          console.log(data.message);
          setError(data.message);
          return;
        }

        console.log(data.data);
        setBook(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, [id]);

  return (
    <div>
      {error && <h2>{error}</h2>}
      {book && (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>
            {book.author.firstName} {book.author.lastName}
          </p>
          <p>{book.genre.title}</p>
          <Link to={"/books"}>back to books</Link>
        </div>
      )}
    </div>
  );
};

export default Book;
