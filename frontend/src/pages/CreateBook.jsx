import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const [genres, setGenres] = useState(["665caf8fd156ac065b1dc918"]);
  const [authors, setAuthors] = useState(["665caf8fd156ac065b1dc913"]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      pages,
      genre,
      author,
    };

    console.log(data);

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
        className="flex flex-col border border-black"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          className="border border-black"
        />
        <textarea
          className="border border-black"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          className="border border-black"
          type="number"
          min={0}
          onChange={(e) => setPages(e.target.value)}
        />
        <select
          className="border border-black"
          name="genre"
          id="genre"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        >
          <option value={""}>select option</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {"test genre"}
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
          <option value={""}>select option</option>

          {authors.map((author, index) => (
            <option key={index} value={author}>
              {"test author"}
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
