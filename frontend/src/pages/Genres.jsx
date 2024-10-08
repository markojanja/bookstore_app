import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingScreen from '../components/LoadingScreen';
import ErrorPage from '../components/ErrorPage';

const Genres = () => {
  const { data: genres, isLoading, error } = useFetch('http://localhost:3000/genres/');
  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex flex-col gap-3 w-1/2 mx-auto mt-5">
      <h2 className="text-2xl font-semibold w-2/3 mx-auto">Genres</h2>
      <ul className="flex flex-col gap-2 w-2/3 mx-auto">
        {genres.data.map((genre) => (
          <li key={genre._id} className="bg-emerald-400 text-lg w-full rounded p-3">
            <Link className="text-lg text-gray-800 font-semibold flex" to={genre._id}>
              {genre.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
