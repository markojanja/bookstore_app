/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const resp = await fetch("http://localhost:3000/genres/");
        const data = await resp.json();
        console.log(data);
        setGenres(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre._id}>{genre.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
