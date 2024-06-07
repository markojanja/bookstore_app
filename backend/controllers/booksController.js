import Book from "../models/book.js";


const getAllBooks = async (req, res) => {
  try {
    let data = await Book.find({}).populate("author genre");
    res.status(200).json({ status:res.status, data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res, next) => {
  try {
    let data = req.body;
    await Book.create(data);

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send({ message: error.status });
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

    res.status(200).json({ statusCode:res.statusCode,status:'ok',data: book });
  } catch (error) {

    next(error);
  }
};

const deleteBook = async (req, res,next) => {
  let book;
  try {
    const { id } = req.params;
    book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.deleteOne();
    res.status(200).json({ message: "book deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getAllBooks, createBook, getSingleBook, deleteBook };
