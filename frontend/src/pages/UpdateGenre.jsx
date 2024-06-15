import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
      <div>
        <h2>update genre</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={title}
            name="title"
            id="title"
            onChange={handleChange}
          />
          <button
            className="bg-emerald-500 text-white py-3 px-5 rounded self-center"
            type="submit"
          >
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGenre;
