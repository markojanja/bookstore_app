import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingScreen from "../components/LoadingScreen";

const Author = () => {
  const { id } = useParams();

  const { data: author, isLoading } = useFetch(
    `http://localhost:3000/authors/${id}`
  );
  const { data: books } = useFetch(`http://localhost:3000/books/author/${id}`);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex flex-col gap-3 w-4/6 mx-auto mt-5">
      {author && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            {author.data.firstName} {author.data.lastName}
          </h2>
          <p className="text-lg">{author.data.bio}</p>
        </div>
      )}
      <ul>
        <h3 className="text-xl font-bold">Books :</h3>
        {books &&
          books.data.map((book) => (
            <li className="text-lg" key={book._id}>
              {book.title}
            </li>
          ))}
      </ul>
      <Link
        className="bg-emerald-500 text-white px-3 py-2 rounded w-max"
        to={`/authors/update/${id}`}
      >
        update
      </Link>
    </div>
  );
};

export default Author;
