//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose; //creates schema and model and connects it to mongoose.schema and mongoose.model. called Destructuring

// make fruits schema
const outdoorItemSchema = new Schema({
    img: String,
    title: String,
    price: Number,
    description: String,
});

// make fruit model
const OutdoorItem = model("OutdoorItem", outdoorItemSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = OutdoorItem;