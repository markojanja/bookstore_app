import mongoose from "mongoose";

const authorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
      maxLength: 500,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Author", authorSchema);
