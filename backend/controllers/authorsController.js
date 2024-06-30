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
  let data;
  try {
    data = await Author.findById(id);
    if (!data) {
      const err = new Error("Author not found");
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ data });
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
  const { id } = req.params;
  const { firstName, lastName, bio } = req.body;
  try {
    const author = await Author.findById(id);

    author.firstName = firstName;
    author.lastName = lastName;
    author.bio = bio;

    await author.save();

    res.json({ message: "author updated" });
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);

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
