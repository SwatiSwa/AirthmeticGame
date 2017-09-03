var Arithmetic = require('./../model/Arithmetic');

function performOperation(req, res){
    var operand1 = req.body.operand1;
    var operand2 = req.body.operand2;
    var operator = req.body.operator;
    var result   = req.body.result;
    var actualResult = null,status=false;

    if(operator == "Add"){
        actualResult = operand1 + operand2;
    }
    else if(operator == "Subtract"){
        actualResult = operand1 - operand2;
    }
    else if(operator == "Multiply"){
        actualResult = operand1 * operand2;
    }
    else if(operator == "Divide"){
        actualResult = operand1 / operand2;
    }

    status = (result == actualResult)?true:false;

    var arithmetic = new Arithmetic({
        operand1: operand1,
        operand2 : operand2,
        operator : operator,
        result : result,
        actualResult : actualResult,
        success : status
    });

    arithmetic.save(function (err) {
      if (err) {
        res.status(500).send(arithmetic);;
      } else {
          res.send(arithmetic);
      }
    });
}

function getResults(req, res){
    Arithmetic.find(function(err, response){
         if(err){
            res.status(500).send(err);
         }
         res.send(response);
    });
}

module.exports = {
    performOperation : performOperation,
    getResults        : getResults
};