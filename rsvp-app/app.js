var express=require('express')
var bodyParser= require('body-parser')
var {details}= require('./src/routes/detailsRoutes');
var cors = require("cors");
const mongoose = require('mongoose');

var app =express()
const port = 3004;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://Maggie-Moteno:Maggie-Thabo2000@maggie1-qiqvh.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

details(app);

app.listen(port,function(){
    console.log(`i'm listening to port ${port}`)
})

module.exports = app;