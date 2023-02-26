const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { Server } = require('http');

dotenv.config();
const app = express();
const http = Server(app);

const router = require('./routes');
const ejsRouter = require('./routes/ejs.routes');

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.use(ejsRouter);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

module.exports = http;

