const express = require("express");
const OutdoorItem = require("../models/outdooritem");

// Create Router
const router = express.Router();


const authenticateUser = (req, res, next) => {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/user/login");
    }
}
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
    OutdoorItem.find({})
        .then((outdoorItem) => {
            res.render("outdooritem/Index", { outdoorItem, session: req.session })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Authorization Middleware
// router.use((req, res, next) => {
//     if (req.session.loggedIn) {
//       next();
//     } else {
//       res.redirect("/user/login");
//     }
//   });
// NEW ROUTE
router.get("/new", authenticateUser, (req, res) => {
    res.render("outdooritem/New", { session: req.session });
});

// DELETE
router.delete('/:id', authenticateUser, (req, res) => {
    const { id } = req.params;
    OutdoorItem.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/outdooritem')
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

// UPDATE
router.put('/:id', authenticateUser, (req, res) => {
    const { id } = req.params;
    //New: true means it returns the NEW document with changes
    req.body.prime = req.body.prime === "on" ? true : false
    OutdoorItem.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/outdooritem/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// CREATE
router.post("/", authenticateUser, (req, res) => {
    // create the New saleItem
    req.body.prime = req.body.prime === "on" ? true : false
    OutdoorItem.create(req.body)
        .then((saleItem) => {
            // redirect user to Index page if successfully created item
            res.redirect("/outdooritem");
        })
        // send error as json
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

// EDIT
router.get('/:id/edit', authenticateUser, (req, res) => {
    const { id } = req.params;
    OutdoorItem.findById(id)
        .then((outdoorItem) => {
            res.render('outdooritem/Edit', { outdoorItem, session: req.session })
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
    OutdoorItem.findById(id)
        .then((outdoorItem) => {
            // render the template with the data from the database
            res.render("outdooritem/Show", { outdoorItem, session: req.session });
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

// Export the Router
module.exports = router