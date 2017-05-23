var app = angular.module('areaMonthList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.areaMonth.list",{
        url:"/list",
        views:{
            "content@root.budget.areaMonth":{
                templateUrl : "root/budget/areaMonth/list/_res/html/index.html",
                controller:'areaMonthListCtrl'
            }
        }
    })
});