//Config for environment variables
require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const Sequelize = require('sequelize');
const path = require('path');
const PORT = process.env.PORT || 5100;

//Accesses body request
// app.use(cors);
app.use(express.json());

// Routes
app.use('/user', require('./routes/user'));
app.use('/salesorder', require('./routes/salesOrders'));
app.use('/company', require('./routes/company'));
app.use('/customer', require('./routes/customer'));
app.use('/inventory', require('./routes/inventory'));
app.use('/barcode', require('./routes/uccbarcode'));

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
} )