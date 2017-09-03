var mongoose = require('mongoose');

var Arithmetic = mongoose.model('Arithmetic', {
    operand1: Number,
    operand2 : Number,
    operator : String,
    result : Number,
    actualResult : Number,
    success : Boolean
});

module.exports = Arithmetic;