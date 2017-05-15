var app = angular.module('profitList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.profit.list",{
        url:"/list",
        views:{
            "content@root.assessment.profit":{
                templateUrl : "root/assessment/profit/list/_res/html/index.html",
                controller:'profitListCtrl'
            }
        }
    })
});