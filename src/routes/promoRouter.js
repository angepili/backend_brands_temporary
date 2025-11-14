const express = require('express');
const router = express.Router();
const promoController = require('./../controllers/promoContoller');

router.get('/:storeId/promo', promoController.promo );

module.exports = router;