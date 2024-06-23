import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenreForm from "../components/GenreForm";

const CreateGenre = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [err, setError] = useState();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`http://localhost:3000/genres/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const json = await resp.json();
      if (!resp.ok) {
        setError(json.message);
      } else {
        navigate("/genres");
      }
    } catch (error) {
      setError("Whoops something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-start pt-3">
      <h2 className="text-2xl">Add genre</h2>
      <GenreForm
        handleFormSubmit={handleFormSubmit}
        title={title}
        handleChange={handleChange}
        label="Add genre"
        err={err}
      />
    </div>
  );
};

export default CreateGenre;
