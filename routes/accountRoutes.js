const { Router } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const accountController = require("../controllers/accountController");


//get routes
router.get("/", accountController.index_get);
router.get("/home", accountController.index_get);
router.get("/shop", accountController.shop_get);

router.get("/howToOrder", accountController.howtoOrder_get);

router.get("/sizechart", accountController.sizeChart_get);

router.get("/contactus", accountController.contactUs_get);

router.get("/about", accountController.about_get);

router.get("/cart", accountController.cart_get);
router.get("/productDetails", accountController.productDetail_get);
router.get("/checkout", accountController.checkout_get);
router.get("/profile", accountController.profile_get);
router.get("/editprofile", accountController.editProfile_get);
router.get("/checkout-confirm", accountController.checkoutConfirm_get);

router.get("/register", accountController.register_get);

//admin get routes  -- change the routes to another file in the future. possibly another source code but connected to the same database
router.get("/admin", accountController.admin_get);
router.get("/admin/home", accountController.adminHome_get);
router.get("/admin/orders", accountController.adminOrders_get);
router.get("/admin/products", accountController.adminProducts_get);
router.get("/adminLogin", accountController.login_get);

module.exports = router;