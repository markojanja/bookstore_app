import { Link, useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

const Book = () => {
  const { id } = useParams();
  const {
    data: book,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>{error}</h1>;

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
    </div>
  );
};

export default Book;
