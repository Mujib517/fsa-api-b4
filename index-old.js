const http = require('http');

// Linked in Ruby on Rails 21 servers, multi threaded
// NodeJS 3 servers, 20% up, single threaded
// Throughput: 100req/sec
// Express JS library/framework nodejs
// Knife -> Cutter
// NodeJS - Express
// Java - Spring boot
// MERN : MongoDB, Express, React and Node
// scaling: instances
// express: framework, API
const handler = (req, res) => {
    // routing
    // JSON or XML
    const books = [
        { id: 1, name: 'Clean Coding', price: 80 },
        { id: 2, name: 'Clean Coder', price: 100 },
        { id: 3, name: 'Refactoring', price: 200 }
    ];

    switch (req.url) {
        case '/':
            // sync
            res.write('Hello World');
            break;
        case '/books':
            // blocking
            // sync
            // async: timers, db, file, api, events
            // long running tasks
            res.write(JSON.stringify(books));
            break;
        case '/authors':
            const cb = () => {
                res.write('List of authors');
                res.end();
            };
            // atleast 1 sec
            setTimeout(cb, 1000);
            break;
        default:
            res.write('Not found');
            break;
    }
    // res.end();
};

const server = http.createServer(handler);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});