const express = require("express");
const app = express();
const accountRoutes = require("./routes/accountRoutes")
const session = require("express-session");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.set('view engine','ejs');
app.use( express.static( "public" ) );
app.use(expressLayouts);


app.use(session({secret: 'ssshhhhh',saveUninitialized: false,resave: false}));
app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});



app.use(accountRoutes);
app.listen(3000);