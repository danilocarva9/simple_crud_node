const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://206.189.179.30:27017/timtjobs',{ useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

const Job = mongoose.model('Job');
app.use('/api', require("./src/routes"));

app.listen(3000);