import { useState, useEffect } from "react";
import BookForm from "../components/BookForm";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors([]);
    setGenres([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <div>
      <h2>Update Book</h2>
      <BookForm
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setDescription={setDescription}
        setPages={setPages}
        setGenre={setGenre}
        setAuthor={setAuthor}
        title={title}
        description={description}
        pages={pages}
        genre={genre}
        author={author}
        genres={genres}
        authors={authors}
        label={"Save"}
      />
    </div>
  );
};

export default UpdateBook;
