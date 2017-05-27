var app = angular.module('money', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.money", {
        url : "/money",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/money/_res/html/index.html",
                controller:"moneyCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/money/_res/html/menu.html",
                controller:"moneyMenuCtrl"
            }
        }
    }).state("root.assessment.money.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.money":{
                templateUrl : "root/assessment/money/add/_res/html/index.html",
                controller:'moneyAddCtrl'
            }
        }
    }).state("root.assessment.money.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.money":{
                templateUrl : "root/assessment/money/edit/_res/html/index.html",
                controller:'moneyEditCtrl'
            }
        }
    })
});