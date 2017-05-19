var app = angular.module('areaWeekList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.areaWeek.list",{
        url:"/list",
        views:{
            "content@root.budget.areaWeek":{
                templateUrl : "root/budget/areaWeek/list/_res/html/index.html",
                controller:'areaWeekListCtrl'
            }
        }
    }).state("root.budget.areaWeek.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.budget.areaWeek.list":{
                templateUrl : "root/budget/areaWeek/list/delete/_res/html/index.html",
                controller:'areaWeekDeleteCtrl'
            }
        }
    })
});