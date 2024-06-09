import express from "express";

import validateObjectId from "../middleware/validateObjectId.js";
import {
  createGenre,
  deleteGenre,
  getGenre,
  getGenres,
  updateGenre,
} from "../controllers/genresController.js";

const router = express.Router();

router.get("/", getGenres);
router.post("/create", createGenre);
router.get("/:id", validateObjectId, getGenre);
router.patch("/update/:id", validateObjectId, updateGenre);
router.delete("/delete/:id", validateObjectId, deleteGenre);

export default router;
