/////////////////////////////////////////////
// Import Our Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error));

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose; //creates schema and model and connects it to mongoose.schema and mongoose.model. called Destructuring

// make saleItem schema
const saleItemSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
});

// make saleItem model
const SaleItem = model("SaleItem", saleItemSchema);

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

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    SaleItem.find({})
        .then((saleItem) => {
            res.render("amazon/Index", { saleItem })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// Index

app.get('/saleitem', (req, res) => {
    SaleItem.find({})
        .then((saleItem) => {
            res.render("amazon/Index", { saleItem })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//NEW
app.get('/saleitem/new', (req, res) => {
    res.render('amazon/New')
})

////////////////////////////////////////////
// Seed route
////////////////////////////////////////////
app.get("/saleItem/seed", (req, res) => {
    // array of starter fruits
    const saleItem = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "yellow", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
    ];

    // Delete all saleItems OBJECT IS A FILTER, empty object means find everything
    SaleItem.deleteMany({}).then((data) => {
        // Seed Starter saleItems
        SaleItem.create(saleItem).then((data) => {
            // send created fruits as response to confirm creation
            res.json(data);
        });
    }).catch((err) => {
        res.status(400).send(err)
    })
});
//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Amazon listens in on everything, including port ${PORT}`));