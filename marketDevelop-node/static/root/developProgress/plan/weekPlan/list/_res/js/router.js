var app = angular.module('weekPlanList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.weekPlan.list",{
        url:"/list",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/list/_res/html/index.html",
                controller:'weekPlanListCtrl'
            }
        }
    }).state("root.developProgress.plan.weekPlan.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.plan.weekPlan.list":{
                templateUrl : "root/developProgress/plan/weekPlan/list/delete/_res/html/index.html",
                controller:'weekPlanDeleteCtrl'
            }
        }
     })
});