var app = angular.module('costList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.cost.list",{
        url:"/list",
        views:{
            "content@root.assessment.cost":{
                templateUrl : "root/assessment/cost/list/_res/html/index.html",
                controller:'costListCtrl'
            }
        }
    }).state("root.assessment.cost.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.cost.list":{
                templateUrl : "root/assessment/cost/list/delete/_res/html/index.html",
                controller:'costDeleteCtrl'
            }
        }
     })
});