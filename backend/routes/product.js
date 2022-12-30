const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getProduct);

router.route("/admin/products").get(getAdminProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
// router.route("/admin/product/:id").delete(deleteProduct);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(isAuthenticatedUser, getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
