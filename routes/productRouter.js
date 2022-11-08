const express = require('express');

const productCtrl = require('../controllers/productCtrl');

const router = express.Router();

router.get('/', productCtrl.get);

// http://localhost:3000/api/products/page/1/limit/5?sort=price&direction=dsc

router.get('/page/:page/limit/:limit', productCtrl.get);

router.get('/:id', productCtrl.getById);
router.post('/', productCtrl.post);
router.delete('/:id', productCtrl.remove);
router.put('/:id', productCtrl.update);
router.patch('/:id', productCtrl.patch);

module.exports = router;
