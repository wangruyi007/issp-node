var app = angular.module('monthPlan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.monthPlan", {
        url : "/monthPlan",
        views : {
            "content@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/monthPlan/_res/html/index.html",
                controller:"monthPlanCtrl"
            },"menu@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/monthPlan/_res/html/menu.html",
                controller:"monthPlanMenuCtrl"
            }
        }
    }).state("root.developProgress.plan.monthPlan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/add/_res/html/index.html",
                controller:'monthPlanAddCtrl'
            }
        }
    }).state("root.developProgress.plan.monthPlan.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/edit/_res/html/index.html",
                controller:'monthPlanEditCtrl'
            }
        }
    })
});