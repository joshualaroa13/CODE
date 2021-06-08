const { Router } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const accountController = require("../controllers/accountController");


//get routes
router.get("/", auth.guardSaTC, accountController.index_get);
router.get("/home", accountController.index_get);
router.get("/shop", accountController.shop_get);

router.get("/howToOrder", accountController.howtoOrder_get);

router.get("/sizechart", accountController.sizeChart_get);

router.get("/contactus", accountController.contactUs_get);

router.get("/aboutus", accountController.about_get);

router.get("/cart", accountController.cart_get);
router.get("/product-details", accountController.productDetail_get);
router.get("/checkout", accountController.checkout_get);
router.get("/profile", accountController.profile_get);
router.get("/editprofile", accountController.editProfile_get);
router.get("/checkout-confirm", accountController.checkoutConfirm_get);


//auth routes
router.get("/register", auth.cookieMonster ,accountController.register_get);
router.get("/login", auth.cookieMonster ,accountController.login_get);
router.get("/logout", accountController.logout_get);


//admin get routes  -- change the routes to another file in the future. possibly another source code but connected to the same database
router.get("/admin", accountController.admin_get);
router.get("/admin/home", accountController.adminHome_get);
router.get("/admin/orders", accountController.adminOrders_get);
router.get("/admin/products", accountController.adminProducts_get);




//post requests
router.post("/register", accountController.register_post);
router.post("/login", accountController.login_post);

module.exports = router;