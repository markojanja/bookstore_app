import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Genre = () => {
  const { id } = useParams();
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const res = await fetch(`http://localhost:3000/genres/${id}`);
        const data = await res.json();
        setGenre(data.genre);
        setBooks(data.books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenre();
  }, []);
  console.log(genre);
  console.log(books);

  return (
    <div>
      <h1>{genre.title}</h1>
      <h3>books in genre:</h3>
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book._id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>There are no books currently under {genre.title} genre</p>
      )}
    </div>
  );
};

export default Genre;