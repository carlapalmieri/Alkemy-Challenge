const { Pool } = require('pg');
const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// defining routes
app.use(require('./routes/index.routes'));

app.listen(3000);
console.log('server ready on port 3000');
