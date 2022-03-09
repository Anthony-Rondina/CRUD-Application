/////////////////////////////////////////////
// Import Our Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const outdoorItemController = require('./controllers/outdoorItem')
const indoorItemController = require('./controllers/indoorItem')
const UserRouter = require("./controllers/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");
/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies MUST BE ABOVE METHOD OVERRIDE
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.static("public")); // serve files from public statically
app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        saveUninitialized: true,
        resave: false,
    })
);
app.use('/outdooritem', outdoorItemController)
app.use('/indooritem', indoorItemController)
app.use('/user', UserRouter)
app.get("/", (req, res) => {
    res.render("outdooritem/Home", {})
});
//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Amazon listens in on everything, including port ${PORT}`));