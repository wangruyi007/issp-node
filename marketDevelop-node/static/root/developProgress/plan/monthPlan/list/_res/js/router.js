var app = angular.module('monthPlanList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.monthPlan.list",{
        url:"/list",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/list/_res/html/index.html",
                controller:'monthPlanListCtrl'
            }
        }
    }).state("root.developProgress.plan.monthPlan.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.plan.monthPlan.list":{
                templateUrl : "root/developProgress/plan/monthPlan/list/delete/_res/html/index.html",
                controller:'monthPlanDeleteCtrl'
            }
        }
     })
});