import express from "express";
import { createBook, deleteBook, getAllBooks, getSingleBook } from "../controllers/booksController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/create", createBook);

router.get("/:id", getSingleBook);
router.delete("/:id", deleteBook);

export default router;
