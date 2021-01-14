import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  reviewProduct,
  getTopProducts,
} from "../Controllers/productController.js";

import { protectUser, admin } from "../Middlewares/authMiddleware.js";

router.route("/").get(getProducts).post(protectUser, admin, createProduct);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protectUser, admin, deleteProduct)
  .put(protectUser, admin, updateProduct);
router.route("/:id/reviews").post(protectUser, reviewProduct);

export default router;
