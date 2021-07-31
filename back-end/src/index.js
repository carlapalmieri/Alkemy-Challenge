const { Pool } = require('pg');
const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// defining routes
app.use('/api',require('./routes/index.routes'));

app.listen(3000);
console.log('server ready on port 3000');
