import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "genres route" });
});

export default router;
