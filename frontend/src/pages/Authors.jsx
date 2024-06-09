import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const resp = await fetch("http://localhost:3000/authors/");
        const authorsData = await resp.json();
        setAuthors(authorsData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author._id}>
            {`${author.firstName} ${author.lastName}`}{" "}
            <span>
              <Link to={`/authors/${author._id}`}>Details</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
