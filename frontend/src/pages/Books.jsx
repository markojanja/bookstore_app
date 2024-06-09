import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const resp = await fetch("http://localhost:3000/books", {
          mode: "cors",
        });
        const data = await resp.json();
        console.log(data.data);
        setBooks(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books && (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <Link to={`/books/${book._id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
