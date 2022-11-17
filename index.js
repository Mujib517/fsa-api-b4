const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const homeRouter = require('./routes/homeRouter');
const bookRouter = require('./routes/bookRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const auth = require('./utils/auth');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

mongoose.connect(config.dbConStr, () => console.log('Connected to DB'));

app.use(bodyParser.json());

const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}
const filePath = path.join(__dirname, 'logs', 'request.log');
const fileStream = fs.createWriteStream(filePath, { flags: 'a' });

app.use(morgan('combined', { stream: fileStream }));

// private
app.use(express.static('uploads/'));

app.use('/', homeRouter);
app.use('/api/users', userRouter);

// app.use(auth.basicAuth);
app.use(auth.tokenAuth);

// private router
app.use('/api/products', productRouter);
app.use('/api/books', bookRouter);

app.get('*', (req, res) => {
    res.status(404);
    res.send('Not found');
});
