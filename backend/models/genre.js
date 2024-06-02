import mongoose from "mongoose";

const genreSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Genre", genreSchema);
