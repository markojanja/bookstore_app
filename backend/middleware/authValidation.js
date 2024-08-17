import jwt from "jsonwebtoken";

const authValidation = (req, res, next) => {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export default authValidation;
