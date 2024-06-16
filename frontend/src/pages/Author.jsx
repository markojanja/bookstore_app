import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Author = () => {
  const { id } = useParams();

  const { data: author, isLoading } = useFetch(
    `http://localhost:3000/authors/${id}`
  );
  const { data: books } = useFetch(`http://localhost:3000/books/author/${id}`);

  if (isLoading) return <h1>loading....</h1>;

  return (
    <div>
      {author && (
        <div>
          <h2>
            {author.data.firstName} {author.data.lastName}
          </h2>
          <p>{author.data.bio}</p>
        </div>
      )}
      <ul>
        <h3>
          Books by:{author.data.firstName} {author.data.lastName}
        </h3>
        {books &&
          books.data.map((book) => <li key={book._id}>{book.title}</li>)}
      </ul>
      <Link to={`/authors/update/${id}`}>update</Link>
    </div>
  );
};

export default Author;
