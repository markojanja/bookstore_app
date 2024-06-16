import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const Genres = () => {
  const { data: genres, isLoading } = useFetch("http://localhost:3000/genres/");
  if (isLoading) return <h1>loading...</h1>;
  return (
    <div className="flex flex-col gap-3 w-5/6 mx-auto mt-5">
      <h2 className="text-2xl font-semibold">Genres</h2>
      <ul className="flex flex-col gap-2 w-2/3">
        {genres.data.map((genre) => (
          <li key={genre._id} className="py-3 px-2 bg-slate-300">
            <Link to={genre._id}>{genre.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
