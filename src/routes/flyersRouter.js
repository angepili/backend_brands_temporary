const express = require('express');
const router = express.Router();
const flyersController = require('../controllers/flyersController');

router.get('/:id/flyers', flyersController.flyers );

module.exports = router;