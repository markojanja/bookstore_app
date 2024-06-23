import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useDelete = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const deleteItem = async (url) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (response.ok) {
        navigate(-1);
      } else {
        setError(json.message);
      }
    } catch (error) {
      setError("Whoops something went wrong");
      console.log(error);
    }
  };
  return { error, deleteItem };
};
