import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Genre = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch(`http://localhost:3000/genres/${id}`);

  if (isLoading) return <h1>Loading....</h1>;

  return (
    <div className="flex flex-col gap-3 w-4/6 mx-auto mt-5">
      <h2 className="text-2xl font-bold">{data.genre?.title}</h2>

      <h3 className="text-xl font-bold">Books in genre:</h3>
      {data.books ? (
        <ul>
          {data.books?.map((book) => (
            <li className="text-lg" key={book._id}>
              {book.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">
          There are no books currently under {data.books?.title} genre
        </p>
      )}

      <Link
        className="bg-emerald-500 text-white px-3 py-2 rounded w-max"
        to={`/genres/update/${data.genre?._id}`}
      >
        Update
      </Link>
    </div>
  );
};

export default Genre;
