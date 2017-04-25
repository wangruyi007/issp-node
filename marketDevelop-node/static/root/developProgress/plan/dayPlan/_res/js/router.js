var app = angular.module('dayPlan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.dayPlan", {
        url : "/dayPlan",
        views : {
            "content@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/dayPlan/_res/html/index.html",
                controller:"dayPlanCtrl"
            },"menu@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/dayPlan/_res/html/menu.html",
                controller:"dayPlanMenuCtrl"
            }
        }
    }).state("root.developProgress.plan.dayPlan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/add/_res/html/index.html",
                controller:'dayPlanAddCtrl'
            }
        }
    }).state("root.developProgress.plan.dayPlan.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/edit/_res/html/index.html",
                controller:'dayPlanEditCtrl'
            }
        }
    })
});