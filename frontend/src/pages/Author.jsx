/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await fetch(`http://localhost:3000/authors/${id}`, {
          mode: "cors",
        });
        const authorData = await res.json();
        console.log(authorData);
        setAuthor(authorData.author);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchBooks = async () => {
      try {
        const res = await fetch(`http://localhost:3000/books/author/${id}`, {
          mode: "cors",
        });
        const booksData = await res.json();
        console.log(booksData.books);
        setBooks([...booksData.books]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAuthor();

    fetchBooks();
  }, []);

  return (
    <div>
      {author && (
        <div>
          <h2>
            {author.firstName} {author.lastName}
          </h2>
          <p>{author.bio}</p>
        </div>
      )}
      <ul>
        <h3>
          Books by:{author.firstName} {author.lastName}
        </h3>
        {books.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Author;
