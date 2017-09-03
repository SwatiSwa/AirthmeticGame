var cool = require('cool-ascii-faces');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3000));

var mongoose = require('mongoose');

var arithmeticCtrl = require('./controller/arithmetic-controller');

mongoose.connect('mongodb://admin:admin@ds119044.mlab.com:19044/airthmetic');

//Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.post('/performOperation',arithmeticCtrl.performOperation);

app.get('/getResults', arithmeticCtrl.getResults);

app.get('/cool', function(request, response) {
    response.send(cool());
  });

app.listen(app.get('port'), function(){
    console.log("Server is listening on port 3000");
});