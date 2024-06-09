import express from "express";
import {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorsController.js";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

router.get("/", getAuthors);
router.post("/create", createAuthor);
router.get("/:id", validateObjectId, getAuthor);
router.patch("/update/:id", validateObjectId, updateAuthor);
router.delete("/delete/:id", validateObjectId, deleteAuthor);

export default router;
