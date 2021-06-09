//models 
const product = require("../models/product");
const account = require("../models/account");
const bcrypt = require("bcrypt");
const connection = require("../connection");
const { QueryTypes, where } = require('sequelize');
const { query } = require("express");
const saltRounds = 10;
const maxAge = 3 * 24 * 60 * 60;
//end of models

exports.index_get = async (req, res)=>{

    const cookie = req.cookies.user;
    const query = "Select * from products ";
    var product = await connection.sequelize.query(query, { type: QueryTypes.SELECT });

    res.render('StartPage',{product:product});
}

exports.shop_get = async (req, res)=>{

    const query = "Select * from products ";
    var product = await connection.sequelize.query(query, { type: QueryTypes.SELECT });

    res.render('Shop',{product:product});
 
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

exports.checkout_get = async (req, res)=>{
    const cookie = req.cookies.user;
    let data = await account.model.findAll({
        
        where: {
            code: cookie
            
        }
        
    });
    res.locals.users = data;
    res.render('Checkout');
}

exports.profile_get = async (req, res)=>{
    const cookie = req.cookies.user;
    let data = await account.model.findAll({
        
        where: {
            code: cookie
            
        }
        
    });
    res.locals.users = data;
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


exports.logout_get = (req,res) =>{
    res.cookie('user', '', {maxAge: 1});
    res.redirect('/Login');
}

//admin get routes
exports.admin_get = (req, res)=>{
    res.render('admin');
}

exports.adminHome_get = async (req, res)=>{

    let data = await product.model.findAll();

    // res.locals.products = data;
    res.render('AdminHome', {products: data});
}

exports.adminOrders_get = (req, res)=>{
    res.render('Orders');
}

exports.adminImages_get = (req, res)=>{
    res.render('Adminimages');
}

exports.adminProducts_get = async (req, res)=>{
    const query = "Select * from products ";
    var product = await connection.sequelize.query(query, { type: QueryTypes.SELECT });
    res.render('AdminProducts',{products:product});
}
//end of admin get routes

exports.login_get = (req, res)=>{
    res.render('Login');
}



//post requests
exports.login_post = async(req,res) => {
    let data = await account.model.findOne({
        where: {
            email: req.body.email
        },
        raw: true
    });

    if (bcrypt.compareSync(req.body.password, data.password) && data.password != ""){
        res.cookie('user', data.code, {httpOnly: true, maxAge: maxAge*1000});
        console.log(data);
        res.redirect("/");
    }else{
        res.send({code: 400});
    }

    console.log(data)
}

exports.register_post = async (req, res) => {

    if(req.body.password === req.body.confirmpassword){

    //encryption of password
    var salt = bcrypt.genSaltSync(saltRounds);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    //end of encryption
 
    req.body.code = generateCode(); //I think the code is cookies
    req.body.accountType = "consumer";
    let data = await account.model.create(
        req.body
    )
    
    res.cookie('user', req.body.code, {httpOnly: true, maxAge: maxAge*1000});
    console.log(data);
    res.redirect('/');

    }

}

exports.addProduct_post = async(req, res)=>{

    req.body.code = generateCode();
    let data = await product.model.create(
        req.body
    )

    console.log(data);
    res.redirect('/admin/home');
}




//middleware functions
generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}