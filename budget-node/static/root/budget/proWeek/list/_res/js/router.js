var app = angular.module('proWeekList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.proWeek.list",{
        url:"/list",
        views:{
            "content@root.budget.proWeek":{
                templateUrl : "root/budget/proWeek/list/_res/html/index.html",
                controller:'proWeekListCtrl'
            }
        }
    }).state("root.budget.proWeek.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.budget.proWeek.list":{
                templateUrl : "root/budget/proWeek/list/delete/_res/html/index.html",
                controller:'proWeekDeleteCtrl'
            }
        }
    })
});