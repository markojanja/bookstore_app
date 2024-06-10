import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAuthor = () => {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      bio,
    };

    try {
      await fetch("http://localhost:3000/authors/create/", {
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
        <h2>Add User</h2>
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          <button type="submit">Add user</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAuthor;
