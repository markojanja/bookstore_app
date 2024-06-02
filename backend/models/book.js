import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      maxLength: 500,
    },
    pages: {
      type: Number,
      required: true,
    },
    genre: {
      type: Schema.Types.ObjectId,
      ref: "Genre",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
