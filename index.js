const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const homeRouter = require('./routes/homeRouter');
const bookRouter = require('./routes/bookRouter');
const productRouter = require('./routes/productRouter');

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// configurations
mongoose.connect('mongodb://127.0.0.1:27017/fsa-b4', () => console.log('Connected to DB'));

app.use(bodyParser.json());

app.use('/', homeRouter);
app.use('/books', bookRouter);
app.use('/api/products', productRouter);

app.get('*', (req, res) => {
    res.status(404);
    res.send('Not found');
});
