const express = require('express');
const env = require('dotenv').config();
const morgan = require('morgan');
const router = require('./routers/index');
const app = express();
const PORT = 5050;
console.log(env);
//middleware
app.use(express.json());
app.use(morgan('dev'));
//routes

app.use(('/', router));
//server instantiation
app.listen(process.env.PORT, () => console.log(`Running in port ${PORT}`));
