import express from "express";
import {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorsController.js";
import validateObjectId from "../middleware/validateObjectId.js";
import authValidation from "../middleware/authValidation.js";

const router = express.Router();

router.get("/", getAuthors);
router.post("/create", authValidation, createAuthor);
router.get("/:id", validateObjectId, getAuthor);
router.patch("/update/:id", authValidation, validateObjectId, updateAuthor);
router.delete("/delete/:id", authValidation, validateObjectId, deleteAuthor);

export default router;
