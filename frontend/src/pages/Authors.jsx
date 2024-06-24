import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingScreen from '../components/LoadingScreen';

const Authors = () => {
  const { data: authors, isLoading, error } = useFetch('http://localhost:3000/authors/');

  if (isLoading) return <LoadingScreen />;
  if (error) return <h1>error</h1>;

  return (
    <div className="flex flex-col gap-3 w-5/6 mx-auto mt-5">
      <h2 className="text-2xl font-semibold">Authors</h2>
      <ul className="flex flex-col gap-2 w-2/3">
        {authors.data.map((author) => (
          <li key={author._id} className="bg-emerald-400 text-lg w-full rounded p-3">
            <Link className="text-lg text-gray-800 font-semibold flex" to={`/authors/${author._id}`}>
              {`${author.firstName} ${author.lastName}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
