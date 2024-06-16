import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Authors = () => {
  const {
    data: authors,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/authors/");

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.data.map((author) => (
          <li key={author._id}>
            {`${author.firstName} ${author.lastName}`}{" "}
            <span>
              <Link to={`/authors/${author._id}`}>Details</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
