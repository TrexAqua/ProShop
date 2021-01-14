import express from "express";
import { protectUser, admin } from "../Middlewares/authMiddleware.js";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
  deleteUser,
  getUserById,
  updateUser,
} from "../Controllers/userController.js";

router.route("/").post(registerUser).get(protectUser, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectUser, getUserProfile)
  .put(protectUser, updateUserProfile);
router
  .route("/:id")
  .delete(protectUser, admin, deleteUser)
  .get(protectUser, admin, getUserById)
  .put(protectUser, admin, updateUser);
export default router;
