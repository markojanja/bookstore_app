import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await fetch("http://localhost:3000/authors/", {
          mode: "cors",
        });
        const authorsData = await res.json();
        setAuthors(authorsData.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGenres = async () => {
      try {
        const res = await fetch("http://localhost:3000/genres/");
        const genresData = await res.json();
        setGenres(genresData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGenres();
    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      pages,
      genre,
      author,
    };

    try {
      await fetch("http://localhost:3000/books/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onSubmit={handleSubmit}
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          min={0}
          onChange={(e) => setPages(e.target.value)}
        />
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="genre"
          id="genre"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        >
          <option value={""}>select genre</option>
          {genres.map((genre) => (
            <option key={genre._id} value={genre._id}>
              {genre.title}
            </option>
          ))}
        </select>
        <select
          className="border border-black"
          name="author"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        >
          <option value={""}>select author</option>

          {authors.map((author) => (
            <option key={author._id} value={author._id}>
              {author.firstName} {author.lastName}
            </option>
          ))}
        </select>
        <button className="border border-black" type="submit">
          AddBook
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
