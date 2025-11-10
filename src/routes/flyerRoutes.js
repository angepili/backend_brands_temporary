const express = require('express');
const router = express.Router();
const flyerController = require('./../controllers/flyersController');

router.get('/', flyerController.getAllFlyers );
router.get('/:id', flyerController.getFlyer );

module.exports = router;