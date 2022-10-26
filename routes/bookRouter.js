const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const books = [
        { id: 1, name: 'Clean Coding', price: 80 },
        { id: 2, name: 'Clean Coder', price: 100 },
        { id: 3, name: 'Refactoring', price: 200 }
    ];
    res.status(200);
    res.json(books);
});

module.exports = router;