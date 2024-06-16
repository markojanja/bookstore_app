import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const Genres = () => {
  const { data: genres, isLoading } = useFetch("http://localhost:3000/genres/");
  if (isLoading) return <h1>loading...</h1>;
  return (
    <div>
      <ul>
        {genres.data.map((genre) => (
          <li key={genre._id}>
            <Link to={genre._id}>{genre.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
