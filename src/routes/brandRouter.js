const express = require('express');
const router = express.Router();
const brandController = require('./../controllers/brandsController');

router.get('/', brandController.brands );
// router.get('/:id', brandController.subbrands );
// router.get('/:id/sub', flyerController.getFlyer );

module.exports = router;