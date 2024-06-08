import Book from "../models/book.js";
import Author from "../models/author.js";
import Genre from "../models/genre.js";

const rootController = async (req, res) => {
  const booksCount = await Book.countDocuments();
  const authorsCount = await Author.countDocuments();
  const genreCount = await Genre.countDocuments();

  const data = {
    booksCount,
    authorsCount,
    genreCount,
  };

  try {
    res.status(200).json({ statusCode:res.statusCode, status:"ok", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default rootController;
