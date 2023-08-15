//Config for environment variables
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const Sequelize = require('sequelize');
const path = require('path');
const PORT = process.env.PORT || 5100;

//Accesses body request
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
} )