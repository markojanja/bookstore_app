import mongoose from "mongoose";

const validateObjectId = (req, res, next) => {
  const { id } = req.params;

  if (id.length !== 24 || !mongoose.Types.ObjectId.isValid(id)) {
    const err = new Error('Invalid book ID');
    err.status = 400; // Bad Request
    return next(err);
  }

  next();
};

export default validateObjectId


