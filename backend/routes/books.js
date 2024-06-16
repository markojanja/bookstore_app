import express from "express";
import {
  createBook,
  deleteBook,
  updateBook,
  getAllBooks,
  getSingleBook,
  getBooksByAuthor,
  getBooksByGenre,
} from "../controllers/booksController.js";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/create", createBook);
router.get("/author/:id", validateObjectId, getBooksByAuthor);
router.get("/genre/:id", validateObjectId, getBooksByGenre);
router.get("/:id", validateObjectId, getSingleBook);
router.patch("/update/:id", validateObjectId, updateBook);
router.delete("delete/:id", deleteBook);

export default router;
