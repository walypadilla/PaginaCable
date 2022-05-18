const express = require('express');

const router = express.Router();

const HomeController = require('../controllers/home.controller');

router.get('/', HomeController.getIndex);
router.get('/revendedores', HomeController.getServices);
router.get('/contacto', HomeController.getContact);

module.exports = router;
