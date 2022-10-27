// in memory
// summary & detail
const books = [
    { id: 1, name: 'Clean Coding', price: 80 },
    { id: 2, name: 'Clean Coder', price: 100 },
    { id: 3, name: 'Refactoring', price: 200 }
];

const get = (req, res) => {
    res.status(200);
    res.json(books);
};

const getById = (req, res) => {
    const id = req.params.id;

    const result = books.find(book => book.id === +id);
    // for (let i = 0; i < books.length; i++) {
    //     if (books[i].id === +id) {
    //         res.status(200);
    //         res.json(books[i]);
    //         return;
    //     }
    // }
    // if (result) {
    //     res.status(200);
    //     res.json(result);
    // } else {
    //     res.status(404);
    //     res.send('Book not found');
    // }
    res.status(result ? 200 : 404);
    res.send(result ? result : 'Not found');
};

const post = (req, res) => {
    const data = req.body;
    books.push(data);

    res.status(201); // Created
    res.send('Created');
};

const remove = (req, res) => {
    const id = +req.params.id;

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books.splice(i, 1);
        }
    }

    res.status(204);// not conent
    res.send();
};

module.exports = {
    get,
    post,
    remove,
    getById,
}