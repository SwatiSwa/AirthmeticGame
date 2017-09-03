var app=angular.module("arithmetic",['ngRoute','ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('#',{
            url : '/#',
            templateUrl : './templates/home.html',
            controller : 'arithmeticController'
        })
        .state('home',{
            url : '/home',
            templateUrl : './templates/result.html',
            controller : 'arithmeticController'
        })
        .state('play',{
            url : '/play',
            templateUrl : './templates/game.html',
            controller : 'arithmeticController'
        });
});

app.controller("arithmeticController",function($scope,$http){
    defaultValues();

    function defaultValues(){
        $scope.game = {
            op1 : "",
            op2 : "",
            operation : "Add",
            result : ""
        };
    }

    $scope.clickSubmit=function(){
        if($scope.game.op1 && $scope.game.op2 && $scope.game.operation && $scope.game.result){
            var data = {	
                "operand1" : Number($scope.game.op1),
                "operand2" : Number($scope.game.op2),
                "operator" : $scope.game.operation,
                "result"   : Number($scope.game.result)
            };
    
            $http.post('/performOperation',data).then(function(res){
                if(res.data.success){
                    $('#resultImg')[0].setAttribute("src","resources/winner.gif");
                }
                else{
                    $('#resultImg')[0].setAttribute("src","resources/looser.gif");
                }
            },function(res){
                console.log(res);
            });
        }
        else{
            alert("Please enter all the fields!!!");
        }
        
    };

    $scope.getResults = function(){
        $http.get('/getResults').then(function(res){
                $scope.results = res.data;
            },function(){
                alert("Error in fetching results!");
            });
        };

    $scope.clickReset = function(){
        defaultValues();
        $('#resultImg')[0].setAttribute("src","");
    };
});