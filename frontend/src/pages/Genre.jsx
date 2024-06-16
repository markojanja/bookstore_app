import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Genre = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch(`http://localhost:3000/genres/${id}`);

  if (isLoading) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>{data.genre?.title}</h1>
      <Link to={`/genres/update/${data.genre?._id}`}>update</Link>
      <h3>books in genre:</h3>
      {data.books ? (
        <ul>
          {data.books?.map((book) => (
            <li key={book._id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>There are no books currently under {data.books?.title} genre</p>
      )}
    </div>
  );
};

export default Genre;
