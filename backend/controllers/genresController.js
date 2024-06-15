import Genre from "../models/genre.js";
import Books from "../models/book.js";

const getGenres = async (req, res, next) => {
  try {
    const data = await Genre.find({});
    res.status(200).json({ statusCode: res.statusCode, status: "ok", data });
  } catch (error) {
    next(error);
  }
};

const getGenre = async (req, res, next) => {
  const { id } = req.params;
  let genre;
  let books;

  try {
    genre = await Genre.findById(id);
    books = await Books.find({ genre: id }).populate("author");
    if (!genre) {
      const err = new Error("Genre not found");
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ genre, books });
  } catch (error) {
    next(error);
  }
};

const createGenre = async (req, res, next) => {
  const { title } = req.body;
  try {
    const newGenre = {
      title,
    };

    await Genre.create(newGenre);
    res.status(201).json({ message: "genre created" });
  } catch (error) {
    next(error);
  }
};

const updateGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findById(id);
    const { title } = req.body;

    console.log(id, title);

    genre.title = title;

    await genre.save();
  } catch (error) {
    next(error);
  }
  res.json({ message: "genre updated" });
};

const deleteGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findById(id);
    console.log(genre);
    if (!genre) {
      const err = new Error("Genre not found");
      err.status = 404;
      return next(err);
    }

    await genre.deleteOne();
    res.status(202).json({ message: "genre deleted" });
  } catch (error) {
    next(error);
  }
};

export { getGenres, getGenre, createGenre, updateGenre, deleteGenre };
