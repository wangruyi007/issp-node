var app = angular.module('dayPlanList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.dayPlan.list",{
        url:"/list",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/list/_res/html/index.html",
                controller:'dayPlanListCtrl'
            }
        }
    }).state("root.developProgress.plan.dayPlan.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.plan.dayPlan.list":{
                templateUrl : "root/developProgress/plan/dayPlan/list/delete/_res/html/index.html",
                controller:'dayPlanDeleteCtrl'
            }
        }
     })
});