import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState("");
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

    fetchAuthor();
  }, [id]);
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
    </div>
  );
};

export default Author;
