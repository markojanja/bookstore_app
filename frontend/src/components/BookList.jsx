import { Link } from 'react-router-dom';

const BookList = ({ data, hasBooks, message }) => {
  return (
    <ul className="flex flex-col gap-2">
      {hasBooks ? <h3 className="text-xl font-bold">Books :</h3> : <p>{message}</p>}

      {data &&
        data.books.map((book) => (
          <li className="bg-emerald-400 text-lg w-full rounded p-3" key={book._id}>
            <Link to={`/books/${book._id}`} className="text-lg text-gray-800 font-semibold flex">
              {book.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default BookList;
