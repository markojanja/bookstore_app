import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingScreen from "../components/LoadingScreen";
const Genres = () => {
  const { data: genres, isLoading } = useFetch("http://localhost:3000/genres/");
  if (isLoading) return <LoadingScreen />;
  return (
    <div className="flex flex-col gap-3 w-5/6 mx-auto mt-5">
      <h2 className="text-2xl font-semibold">Genres</h2>
      <ul className="flex flex-col gap-2 w-2/3">
        {genres.data.map((genre) => (
          <li
            key={genre._id}
            className="bg-emerald-400 p-3 text-lg rounded text-gray-800"
          >
            <Link to={genre._id}>{genre.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
