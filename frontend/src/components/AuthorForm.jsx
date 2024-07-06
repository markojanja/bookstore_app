const AuthorForm = ({ handleFormSubmit, setFirstName, setLastName, setBio, firstName, lastName, bio, label }) => {
  return (
    <form
      className="flex flex-col gap-3 w-3/6 p-3 rounded shadow-md border border-gray-200 mx-auto"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <textarea
        name="bio"
        id="bio"
        placeholder="authors bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-52"
      ></textarea>
      <button className="bg-emerald-500 text-white py-3 px-5 rounded self-center" type="submit">
        {label}
      </button>
    </form>
  );
};

export default AuthorForm;
