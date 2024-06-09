import Book from "../models/book.js";

const getAllBooks = async (req, res, next) => {
  try {
    let data = await Book.find({}).populate("author genre");
    res.status(200).json({ statusCode: res.statusCode, status: "ok", data });
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
    const book = await Book.findById(id).populate("author genre");
    if (!book) {
      const err = new Error("Book not found");
      err.status = 404;
      return next(err);
    }

    res
      .status(200)
      .json({ statusCode: res.statusCode, status: "ok", data: book });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
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

export { getAllBooks, createBook, getSingleBook, updateBook, deleteBook };
