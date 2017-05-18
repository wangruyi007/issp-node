var app = angular.module('monthList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.month.list",{
        url:"/list",
        views:{
            "content@root.budget.month":{
                templateUrl : "root/budget/month/list/_res/html/index.html",
                controller:'monthListCtrl'
            }
        }
    }).state("root.budget.month.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.budget.month.list":{
                templateUrl : "root/budget/month/list/delete/_res/html/index.html",
                controller:'monthDeleteCtrl'
            }
        }
    })
});