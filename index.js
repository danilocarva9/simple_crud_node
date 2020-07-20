const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//Require DB
require('./src/config/database');
//Require models
requireDir('./src/models');

//Define routes
app.use('/api', require("./src/routes"));
//App listen to port
app.listen(process.env.PORT);