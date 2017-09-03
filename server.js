var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');

var arithmeticCtrl = require('./controller/arithmetic-controller');

mongoose.connect('mongodb://admin:admin@ds119044.mlab.com:19044/airthmetic');

//Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.post('/performOperation',arithmeticCtrl.performOperation);

app.get('/getResults', arithmeticCtrl.getResults);

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});