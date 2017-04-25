var app = angular.module('yearPlanList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.yearPlan.list",{
        url:"/list",
        views:{
            "content@root.developProgress.plan.yearPlan":{
                templateUrl : "root/developProgress/plan/yearPlan/list/_res/html/index.html",
                controller:'yearPlanListCtrl'
            }
        }
    }).state("root.developProgress.plan.yearPlan.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.plan.yearPlan.list":{
                templateUrl : "root/developProgress/plan/yearPlan/list/delete/_res/html/index.html",
                controller:'yearPlanDeleteCtrl'
            }
        }
     })
});