var app = angular.module('moneyList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.money.list",{
        url:"/list",
        views:{
            "content@root.assessment.money":{
                templateUrl : "root/assessment/money/list/_res/html/index.html",
                controller:'moneyListCtrl'
            }
        }
    }).state("root.assessment.money.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.money.list":{
                templateUrl : "root/assessment/money/list/delete/_res/html/index.html",
                controller:'moneyDeleteCtrl'
            }
        }
     })
});