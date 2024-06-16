import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Books = () => {
  const {
    data: books,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/books");

  if (isLoading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h2>Books</h2>
      {books && (
        <ul>
          {books.data?.map((book) => (
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
