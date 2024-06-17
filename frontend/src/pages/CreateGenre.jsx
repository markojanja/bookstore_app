import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenreForm from "../components/GenreForm";

const CreateGenre = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/genres/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      navigate("/genres");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-start gap-5">
      <h2 className="text-2xl">Add genre</h2>
      <GenreForm
        handleFormSubmit={handleFormSubmit}
        title={title}
        handleChange={handleChange}
        label="Add genre"
      />
    </div>
  );
};

export default CreateGenre;
