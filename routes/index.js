const express = require('express');
const router = express.Router();
const filmsRoutes = require('./filmroutes');
const categoriesRoutes = require('./categoryroutes');

router.use('/film', filmsRoutes);
router.use('/category', categoriesRoutes);

module.exports = router;