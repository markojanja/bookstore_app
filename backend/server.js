import express from "express";
import dbConnect from "./config/config.js";
import rootRouter from "./routes/root.js";
import booksRouter from "./routes/books.js";
import authorsRoute from "./routes/authors.js";
import genresRoute from "./routes/genres.js";
import authRoute from "./routes/auth.js";
import errorHandler from "./middleware/errorhandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dbConnect();

const app = express();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/", rootRouter);

app.use("/books", booksRouter);

app.use("/authors", authorsRoute);

app.use("/genres", genresRoute);

app.use("/", authRoute);

app.get("/*", async (req, res) => {
  res.status(404).json({ message: "not found" });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
