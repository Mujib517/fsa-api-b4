const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');

const router = express.Router();

router.get('/', bookCtrl.get);
router.get('/:id', bookCtrl.getById);
router.post('/', bookCtrl.post);
router.delete('/:id', bookCtrl.remove);
router.put('/:id', bookCtrl.put);
router.patch('/:id', bookCtrl.patch);

module.exports = router;