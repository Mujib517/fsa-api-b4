// in memory
// summary & detail
// database
// No SQL: Mongo, Aurora, Cassandra
// MongoDB
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

// http://localhost:3000/books/1
// {price:120,name:'Refactoring 2'}
// full update
const put = (req, res) => {
    const id = +req.params.id;
    const data = req.body;

    if (!data.name || !data.price) {

        const errors = [];

        if (!data.name) {
            const err = { msg: 'Name is required' };
            errors.push(err);
        }

        if (!data.price) {
            const err = { msg: 'Price is required' };
            errors.push(err);
        }

        res.status(400);
        res.json(errors);
    }

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i].name = data.name;
            books[i].price = data.price;

            res.status(204);
            res.send();
            return;
        }
    }

    res.status(404);
    res.send('Not found');
};

// partial update
const patch = (req, res) => {
    const id = +req.params.id;
    const data = req.body;

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            const book = books[i];
            // reflection
            for (let key in data) {
                book[key] = data[key];
            }

            res.status(204);
            res.send();
            return;
        }
    }

    res.status(404);
    res.send('Not found');
};

module.exports = {
    get,
    post,
    remove,
    getById,
    put,
    patch,
}
