import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/user.js";

export const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const isUser = await Users.findOne({ username });
    if (isUser) {
      return res.status(302).json({ message: "user already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving user" });
  }
};

export const login = async (req, res) => {
  // login
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ username });
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      { username },
      process.env.REFRESH_TOKEN_SECRET
    );
    user.refreshToken = refreshToken;
    await user.save();

    res
      .cookie("token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({ accessToken, user: { user: user.username } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error loggin user" });
  }
};

export const refreshToken = async (req, res) => {
  //refresh token

  const { token } = req.cookies;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const user = await Users.findOne({ refreshToken: token });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, userData) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
          { username: userData.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "15m" }
        );
        const newRefreshToken = jwt.sign(
          { username: userData.username },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "7d" }
        );

        user.refreshToken = newRefreshToken;

        await user.save();

        res
          .cookie("token", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          })
          .json({
            username: user.username,
            message: "refreshTokenCreated",
            accessToken: accessToken,
          });
      }
    );
  } catch (error) {
    res.status(500).send("Error refreshing token");
  }
};

export const logout = async (req, res) => {
  console.log(req.Cookie);
  const { token } = req.cookies;
  if (!refreshToken) return res.sendStatus(401);

  try {
    await Users.findOneAndUpdate(
      { refreshToken: token },
      { refreshToken: null }
    );
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .sendStatus(204);
  } catch (err) {
    res.status(500).send("Error logging out");
  }
};
