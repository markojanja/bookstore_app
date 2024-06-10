import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAuthor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const url = import.meta.BASE_URL;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      bio,
    };

    try {
      await fetch(`${url}/authors/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      navigate("/authors");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2>Add Author</h2>
        <form
          className="flex flex-col gap-3 w-[80%] mx-auto"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <textarea
            name="bio"
            id="bio"
            onChange={(e) => setBio(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-52"
          ></textarea>
          <button
            className="bg-emerald-500 text-white py-3 px-5 rounded self-center"
            type="submit"
          >
            Add author
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAuthor;
