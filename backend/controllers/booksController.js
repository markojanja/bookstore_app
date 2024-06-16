import Book from "../models/book.js";

const getAllBooks = async (req, res, next) => {
  try {
    let data = await Book.find({}).populate("author genre");
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    let data = req.body;
    await Book.create(data);

    res.status(201).json({ message: "book created" });
  } catch (error) {
    next(error);
  }
};

const getSingleBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Book.findById(id).populate("author genre");
    if (!data) {
      const err = new Error("Book not found");
      err.status = 404;
      return next(err);
    }

    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, pages, genre, author } = req.body;
    const book = Book.findById(id);

    if (!book) {
      const err = new Error("Book not found");
      err.status = 404;
      return next(err);
    }

    book.title = title;
    book.description = description;
    book.pages = pages;
    book.author = author;
    book.genre = genre;

    await book.save();
  } catch (error) {
    next(error);
  }
  res.json({ message: "sample data" });
};

const deleteBook = async (req, res, next) => {
  let book;
  try {
    const { id } = req.params;
    book = await Book.findById(id);

    if (!book) {
      const err = new Error("Book not found");
      err.status = 404;
      return next(err);
    }
    await book.deleteOne();
    res.status(202).json({ message: "book deleted..." });
  } catch (error) {
    next(error);
  }
};
const getBooksByAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await Book.find({ author: id }).populate("author genre");
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBooksByGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const books = await Book.find({ genre: id })
      .populate("author genre")
      .sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

export {
  getAllBooks,
  getBooksByAuthor,
  getBooksByGenre,
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
