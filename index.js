const express = require('express');

const homeRouter = require('./routes/homeRouter');
const bookRouter = require('./routes/bookRouter');

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// routing
// 1xx - information, pending
// 2xx - success information, 200, 201, 204, 
// 3xx - redirects 301,
// 4xx - client errors 400, 401, 404
// 5xx - server errors 500, 501
// delegate
// http request format
// Content negotiation
// structure
/*
    URL or URI: https://www.example.com/api/books
    method: GET/POST (singup)/PUT/DELETE/PATCH (partial update) (verbs)
    status: 5xx,
    statusText: Ok,
    Headers: client
        Request:
            Content-type: application/json, xml, application/pdf
            Accept: application/json, application/xml
            Authorization: username:password
            x-my-header: akdfjkajdf
        Response: server
            cache-control: no-cache
            Content-type: application/json
            Accept: application/xml
            x-my-header: ....
    Body:
        {
            email:"abc@gmail.com",
            password:"apadkjfkdjf",
            gender:0
        }
*/
// registering
app.use('/', homeRouter);
app.use('/books', bookRouter);

app.get('*', (req, res) => {
    res.status(404);
    res.send('Not found');
});
