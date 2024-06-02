import express from "express";
import dbConnect from "./config/config.js";
import rootRouter from "./routes/root.js";
import booksRouter from "./routes/books.js";

dbConnect();
// populateDB();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", rootRouter);

app.use("/books", booksRouter);

app.get("/*", async (req, res) => {
  res.status(404).json({ message: "not found" });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
