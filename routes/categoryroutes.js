const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categorycontrollers");

router.get("/", categoryController.getAllCategory);

module.exports = router;