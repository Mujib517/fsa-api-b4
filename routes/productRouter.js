const express = require('express');
const upload = require('../utils/uploader');

const productCtrl = require('../controllers/productCtrl');
const { authorize } = require('../utils/auth');

const router = express.Router();

router.get('/', productCtrl.get);

// api/products?brand=Apple&model=Iphone&price=[100,500]&discount=[10,40]
router.get('/page/:page/limit/:limit', productCtrl.get);
router.get('/:id', productCtrl.getById);

router.post('/', upload.single('image'), productCtrl.post);

router.delete('/:id', authorize, productCtrl.remove);
router.put('/:id', productCtrl.update);
router.patch('/:id', productCtrl.patch);

// api/products/reviews POST
router.post('/reviews', productCtrl.addReview);

module.exports = router;
