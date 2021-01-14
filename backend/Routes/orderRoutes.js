import express from "express";
import { protectUser, admin } from "../Middlewares/authMiddleware.js";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  getUserOrders,
  updateOrderToPaid,
  getAllOrders,
  updateOrderToDelivered,
} from "../Controllers/orderControllers.js";

router
  .route("/")
  .post(protectUser, addOrderItems)
  .get(protectUser, admin, getAllOrders);
router.route("/myorders").get(protectUser, getUserOrders);
router.route("/:id").get(protectUser, getOrderById);
router.route("/:id/pay").put(protectUser, updateOrderToPaid);
router.route("/:id/deliver").put(protectUser, admin, updateOrderToDelivered);

export default router;
