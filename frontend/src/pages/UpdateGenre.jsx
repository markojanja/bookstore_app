import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GenreForm from "../components/GenreForm";

const UpdateGenre = () => {
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const res = await fetch(`http://localhost:3000/genres/${id}`, {
          mode: "cors",
        });

        const data = await res.json();

        setTitle(data.genre.title);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGenre();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/genres/update/${id}`, {
        mode: "cors",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title }),
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-start gap-5">
        <h2>update genre</h2>
        <GenreForm
          handleChange={handleChange}
          handleFormSubmit={handleFormSubmit}
          title={title}
          label="save"
        />
      </div>
    </div>
  );
};

export default UpdateGenre;
