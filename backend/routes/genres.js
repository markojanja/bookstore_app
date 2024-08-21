import express from "express";

import validateObjectId from "../middleware/validateObjectId.js";
import {
  createGenre,
  deleteGenre,
  getGenre,
  getGenres,
  updateGenre,
} from "../controllers/genresController.js";
import authValidation from "../middleware/authValidation.js";

const router = express.Router();

router.get("/", getGenres);
router.post("/create", authValidation, createGenre);
router.get("/:id", validateObjectId, getGenre);
router.patch("/update/:id", authValidation, validateObjectId, updateGenre);
router.delete("/delete/:id", authValidation, validateObjectId, deleteGenre);

export default router;
