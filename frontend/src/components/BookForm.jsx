const BookForm = ({
  handleSubmit,
  setTitle,
  setDescription,
  setPages,
  setGenre,
  setAuthor,
  title,
  description,
  pages,
  genre,
  author,
  genres,
  authors,
  label,
}) => {
  return (
    <form
      className="flex flex-col gap-3 w-3/6 p-3 rounded shadow-md border border-gray-200 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="title"
        id="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-52"
        name="description"
        id="description"
        placeholder="book description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        placeholder="number of pages"
        min={0}
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="genre"
        id="genre"
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
      >
        <option value={genre ? genre._id : ''}>{genre ? genre.title : 'select genre'}</option>
        {genres.map((genre) => (
          <option key={genre._id} value={genre._id}>
            {genre.title}
          </option>
        ))}
      </select>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="author"
        id="author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      >
        <option value={author ? author._id : ''}>
          {author ? `${author.firstName} ${author.lastName}` : 'select author'}
        </option>

        {authors.map((author) => (
          <option key={author._id} value={author._id}>
            {author.firstName} {author.lastName}
          </option>
        ))}
      </select>
      <button className="bg-emerald-500 text-white py-3 px-5 rounded self-center" type="submit">
        {label}
      </button>
    </form>
  );
};

export default BookForm;
