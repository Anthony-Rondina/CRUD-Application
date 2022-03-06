const express = require("express");
const indoorItem = require("../models/indooritem");

// Create Router
const router = express.Router();

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

////////////////////////////////////////////
// Seed route
////////////////////////////////////////////
// router.get("/seed", (req, res) => {
//     // array of starter saleitems
//     const saleItem = [
//         { name: "Orange", color: "orange", readyToEat: false },
//         { name: "Grape", color: "purple", readyToEat: false },
//         { name: "Banana", color: "yellow", readyToEat: false },
//         { name: "Strawberry", color: "red", readyToEat: false },
//         { name: "Coconut", color: "brown", readyToEat: false },
//     ];

//     // Delete all items OBJECT IS A FILTER, empty object means find everything
//     SaleItem.deleteMany({}).then((data) => {
//         // Seed Starter Sale Items
//         SaleItem.create(saleItem).then((data) => {
//             // send created items as response to confirm creation
//             res.json(data);
//         });
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// });
// Index
router.get('/', (req, res) => {
    indoorItem.find({})
        .then((indoorItem) => {
            res.render("indooritem/Index", { indoorItem })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// NEW ROUTE
router.get("/new", (req, res) => {
    res.render("indooritem/New");
});

// DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    indoorItem.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/indooritem')
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

// UPDATE
router.put('/:id', (req, res) => {
    const { id } = req.params;
    //New: true means it returns the NEW document with changes
    indoorItem.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/indooritem/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// CREATE
router.post("/", (req, res) => {
    // create the New saleItem
    indoorItem.create(req.body)
        .then((saleItem) => {
            // redirect user to Index page if successfully created item
            res.redirect("/indooritem");
        })
        // send error as json
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    indoorItem.findById(id)
        .then((indoorItem) => {
            res.render('indooritem/Edit', { indoorItem })
        })
        .catch((error) => {
            res.send(400).json({ error })
        })
})

// SHOW ROUTE
router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;

    // find the particular saleitems from the database
    //.then and .catch replace an if/else statement
    indoorItem.findById(id)
        .then((indoorItem) => {
            // render the template with the data from the database
            res.render("indooritem/Show", { indoorItem });
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

// Export the Router
module.exports = router