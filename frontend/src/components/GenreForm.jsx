/* eslint-disable react/prop-types */
const GenreForm = ({ handleFormSubmit, title, handleChange, label }) => {
  return (
    <form
      className="flex flex-col gap-3 w-[80%] mx-auto"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <button
        className="bg-emerald-500 text-white py-3 px-5 rounded self-center"
        type="submit"
      >
        {label}
      </button>
    </form>
  );
};

export default GenreForm;
