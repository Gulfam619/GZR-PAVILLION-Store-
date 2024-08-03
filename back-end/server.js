const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const morgan = require('morgan');

// Middleware setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST','DELETE'],
  allowedHeaders: [
    'Content-Type',
    'Accept',
    'X-Requested-With',
    'X-HTTP-Method-Override',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
  ],
}));
app.use(express.json());
app.use(morgan("dev"));

// Import routes
const getDataRouter = require('./api/showData');
const addDataRouter = require('./api/addData');
const deleteDataRouter = require('./api/deleteData');

// Use routes
app.use('/showData', getDataRouter);
app.use('/addData', addDataRouter);
app.use('/deleteData', deleteDataRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
