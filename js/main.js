var app=angular.module("airthmetic",[]);

app.controller("airthmeticController",function($scope){
    $scope.op1="";
    $scope.op2="";
    $scope.operations = "Add";
    $scope.result = "";

    $scope.clickSubmit=function(){
        var num1 = Number($scope.op1),
            num2 = Number($scope.op2),
            actResult=null;

        switch($scope.operations){
            case "Add" : actResult = num1+num2;
                            break;
            case "Subtract" : actResult = num1-num2;
                            break;  
            case "Multiply" : actResult = num1*num2;
                            break; 
            case "Divide" : actResult = num1/num2;
                            break;            
        }
        if(actResult==$scope.result){
            console.log("Yippieee :) !!!!");
            $('#resultImg')[0].setAttribute("src","resources/winner.gif");
        }
        else{
            console.log("oooooo :( !!!!");
            $('#resultImg')[0].setAttribute("src","resources/looser.gif")
        }
    };

    $scope.clickReset = function(){
        $scope.op1="";
        $scope.op2="";
        $scope.operations = "";
        $scope.result = "";
    };
});