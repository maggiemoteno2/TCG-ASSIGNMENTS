var express=require('express')
var bodyParser= require('body-parser')
var {details}= require('./src/routes/detailsRoutes');
var cors = require("cors");
const mongoose = require('mongoose');
const mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


var app =express()
const port = 3005;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.URL,{useNewUrlParser: true, useUnifiedTopology: true});

details(app);

app.listen(port,function(){
    console.log(`port ${port}`)
})

module.exports = app;