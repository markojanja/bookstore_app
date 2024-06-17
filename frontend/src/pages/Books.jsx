import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingScreen from "../components/LoadingScreen";

const Books = () => {
  const {
    data: books,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/books");

  if (isLoading) return <LoadingScreen />;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="flex flex-col gap-3 w-5/6 mx-auto mt-5">
      <h2 className="text-2xl font-semibold">Books</h2>
      {books && (
        <ul className="flex flex-col gap-2 w-2/3">
          {books.data?.map((book) => (
            <li
              key={book._id}
              className="bg-emerald-400 p-3 text-lg rounded text-gray-800"
            >
              <Link to={`/books/${book._id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
