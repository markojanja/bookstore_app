import express from "express";
import {
  createBook,
  deleteBook,
  updateBook,
  getAllBooks,
  getSingleBook,
} from "../controllers/booksController.js";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/create", createBook);

router.get("/:id", validateObjectId, getSingleBook);
router.put("/update/:id", validateObjectId, updateBook);
router.delete("delete/:id", deleteBook);

export default router;
