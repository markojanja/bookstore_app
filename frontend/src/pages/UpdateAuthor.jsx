import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import AuthorForm from "../components/AuthorForm";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAuthor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: author, isLoading } = useFetch(
    `http://localhost:3000/authors/${id}`
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (author) {
      setFirstName(author.data.firstName);
      setLastName(author.data.lastName);
      setBio(author.data.bio);
    }
  }, [author]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      firstName,
      lastName,
      bio,
    };

    try {
      await fetch(`http://localhost:3000/authors/update/${id}`, {
        mode: "cors",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <h2>Update author</h2>
      <AuthorForm
        handleFormSubmit={handleFormSubmit}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setBio={setBio}
        label={"save"}
        firstName={firstName}
        lastName={lastName}
        bio={bio}
      />
    </div>
  );
};

export default UpdateAuthor;
