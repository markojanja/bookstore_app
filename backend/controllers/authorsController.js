import Author from "../models/author.js";

const getAuthors = async (req, res, next) => {
  try {
    const data = await Author.find({});
    res.status(200).json({ statusCode: res.statusCode, status: "ok", data });
  } catch (error) {
    next(error);
  }
};

const getAuthor = async (req, res, next) => {
  const { id } = req.params;
  let author;
  try {
    author = await Author.findById(id);
    if (!author) {
      const err = new Error("Author not found");
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ statusCode: res.statusCode, status: "ok", author });
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  const { firstName, lastName, bio } = req.body;

  try {
    const newAuthor = {
      firstName,
      lastName,
      bio,
    };

    await Author.create(newAuthor);
    res.status(201).json({ message: "author created" });
  } catch (error) {
    next(error);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    const { firstName, lastName, bio } = req.body;

    author.firstName = firstName;
    author.lastName = lastName;
    author.bio = bio;

    await author.save();
  } catch (error) {
    next(error);
  }
  res.json({ message: "author updated" });
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    console.log(author);
    if (!author) {
      const err = new Error("Author not found");
      err.status = 404;
      return next(err);
    }

    await author.deleteOne();
    res.status(202).json({ message: "author deleted" });
  } catch (error) {
    next(error);
  }
};

export { getAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor };
