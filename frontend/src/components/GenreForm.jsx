import { useEffect, useRef } from 'react';

const GenreForm = ({ handleFormSubmit, title, handleChange, err, label }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      className="flex flex-col gap-3 w-3/6 p-3 rounded shadow-md border border-gray-200 mx-auto"
      onSubmit={handleFormSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder="genre title"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
      />

      <button className="bg-emerald-500 text-white py-3 px-5 rounded self-center" type="submit">
        {label}
      </button>
      {err && (
        <div className="flex items-center justify-center bg-red-300 text-red-700 p-4 rounded border border-red-700">
          {err}
        </div>
      )}
    </form>
  );
};

export default GenreForm;
