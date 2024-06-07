import express from "express";
import { createBook, deleteBook, getAllBooks, getSingleBook } from "../controllers/booksController.js";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/create", createBook);

router.get("/:id", validateObjectId ,getSingleBook);
router.delete("/:id", deleteBook);

export default router;
