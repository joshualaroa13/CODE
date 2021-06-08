//models 

//end of models

exports.index_get = (req, res)=>{
    res.render('StartPage');
}

exports.shop_get = (req, res)=>{
    res.render('Shop');
}

exports.howtoOrder_get = (req, res)=>{
    res.render('HowtoOrder');
}

exports.sizeChart_get = (req, res)=>{
    res.render('SizeChart');
}

exports.contactUs_get = (req, res)=>{
    res.render('Contact');
}

exports.about_get = (req, res)=>{
    res.render('Aboutus');
}

exports.cart_get = (req, res)=>{
    res.render('Cart');
}

exports.productDetail_get = (req, res)=>{
    res.render('ProductDetail');
}

exports.checkout_get = (req, res)=>{
    res.render('Checkout');
}

exports.profile_get = (req, res)=>{
    res.render('Profile');
}

exports.editProfile_get = (req, res)=>{
    res.render('EditProfile');
}

exports.checkoutConfirm_get = (req, res)=>{
    res.render('AfterCheckout');
}

exports.register_get = (req, res) => {
    res.render('register');
}


//admin get routes
exports.admin_get = (req, res)=>{
    res.render('Admin');
}

exports.adminHome_get = (req, res)=>{
    res.render('AdminHome');
}

exports.adminOrders_get = (req, res)=>{
    res.render('Orders');
}

exports.adminProducts_get = (req, res)=>{
    res.render('AdminProducts');
}

exports.login_get = (req, res)=>{
    res.render('Login');
}

