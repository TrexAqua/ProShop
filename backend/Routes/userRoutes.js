import express from "express";
import { protectUser } from "../Middlewares/authMiddleware.js";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../Controllers/userController.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protectUser, getUserProfile);

export default router;
