const express = require("express");
const router = express.Router();

const Product = require("../../models/Products");

// @route GET api/projects
// @desc Get all projects for a specific user
// @access Private
router.get(
  "/",

  (req, res) => {
    Product.find({

    }).then(products=>{
        res.json(products)
    })

  });

router.post(
"/",

(req, res) => {
    Product.create(
        req.body
    ).then(products=>{
        res.json(products)
    })

});

module.exports = router;