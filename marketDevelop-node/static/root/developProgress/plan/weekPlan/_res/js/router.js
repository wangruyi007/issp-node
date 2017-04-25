var app = angular.module('weekPlan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.weekPlan", {
        url : "/weekPlan",
        views : {
            "content@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/weekPlan/_res/html/index.html",
                controller:"weekPlanCtrl"
            },"menu@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/weekPlan/_res/html/menu.html",
                controller:"weekPlanMenuCtrl"
            }
        }
    }).state("root.developProgress.plan.weekPlan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/add/_res/html/index.html",
                controller:'weekPlanAddCtrl'
            }
        }
    }).state("root.developProgress.plan.weekPlan.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/edit/_res/html/index.html",
                controller:'weekPlanEditCtrl'
            }
        }
    })
});