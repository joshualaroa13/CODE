const express = require("express");
const app = new express();
const session = require("express-session");
const bodyparser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");


app.set('view engine','ejs');
app.use( express.static( "public" ) );
app.use(expressLayouts);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(session({secret: 'ssshhhhh',saveUninitialized: false,resave: false}));
app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

app.get('/',(req,res)=>{
    res.render('Login');
});
app.get('/home',(req,res)=>{
    res.render('StartPage');
});
app.get('/shop',(req,res)=>{
    res.render('Shop');
});
app.get('/howtoorder',(req,res)=>{
    res.render('HowtoOrder');
});
app.get('/sizechart',(req,res)=>{
    res.render('SizeChart');
});
app.get('/contactus',(req,res)=>{
    res.render('Contact');
});
app.get('/aboutus',(req,res)=>{
    res.render('Aboutus');
});
app.get('/cart',(req,res)=>{
    res.render('Cart');
});
app.get('/product-details',(req,res)=>{
    res.render('ProductDetail');
});
app.get('/admin',(req,res)=>{
    res.render('Adminlogin');
});
app.get('/admin/home',(req,res)=>{
    res.render('Admin');
});
app.get('/admin/orders',(req,res)=>{
    res.render('Orders');
});
app.get('/admin/products',(req,res)=>{
    res.render('AdminProducts');
});
app.get('/admin/images',(req,res)=>{
    res.render('Adminimages');
});
app.get('/adminLogin',(req,res)=>{
    res.render('Login');
});
app.get('/checkout',(req,res)=>{
    res.render('Checkout');
});
app.get('/profile',(req,res)=>{
    res.render('Profile');
});
app.get('/edit-profile',(req,res)=>{
    res.render('EditProfile');
});
app.get('/checkout-confirm',(req,res)=>{
    res.render('AfterCheckout');
});

app.listen(3000);