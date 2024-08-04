import experss from "express";
import {
  register,
  login,
  logout,
  refreshToken,
} from "../controllers/authController.js";

const router = experss.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);
router.post("/logout", logout);

export default router;
