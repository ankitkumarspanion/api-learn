const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const bootcamps = require('./routes/bootcamps');

// Load environment variables 
dotenv.config({
    path: './config/config.env'
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

// create routers
const app = express();

// configure middlewares
if (MODE === 'development') {
    app.use(morgan("dev"));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

// listen to requests
app.listen(PORT, console.log(`Server running in ${MODE} mode in ${PORT}`));