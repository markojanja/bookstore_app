import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateGenre = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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
    <div className="flex flex-col items-center justify-center gap-5">
      <h2>Add genre</h2>
      <form
        className="flex flex-col gap-3 w-[80%] mx-auto"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button
          className="bg-emerald-500 text-white py-3 px-5 rounded self-center"
          type="submit"
        >
          Add genre
        </button>
      </form>
    </div>
  );
};

export default CreateGenre;
