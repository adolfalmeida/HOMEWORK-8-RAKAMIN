const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/filmcontrollers');

router.get('/category', filmsController.getFilmByCategory);
router.get('/:id', filmsController.getFilmById);            
router.get('/', filmsController.getAllFilm);

module.exports = router;