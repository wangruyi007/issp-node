var app = angular.module('yearPlan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.yearPlan", {
        url : "/yearPlan",
        views : {
            "content@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/yearPlan/_res/html/index.html",
                controller:"yearPlanCtrl"
            },"menu@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/yearPlan/_res/html/menu.html",
                controller:"yearPlanMenuCtrl"
            }
        }
    }).state("root.developProgress.plan.yearPlan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.plan.yearPlan":{
                templateUrl : "root/developProgress/plan/yearPlan/list/_res/html/index.html",
                controller:'yearPlanListCtrl'
            }
        }
    }).state("root.developProgress.plan.yearPlan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.plan.yearPlan":{
                templateUrl : "root/developProgress/plan/yearPlan/add/_res/html/index.html",
                controller:'yearPlanAddCtrl'
            }
        }
    }).state("root.developProgress.plan.yearPlan.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.plan.yearPlan":{
                templateUrl : "root/developProgress/plan/yearPlan/edit/_res/html/index.html",
                controller:'yearPlanEditCtrl'
            }
        }
    }).state("root.developProgress.plan.yearPlan.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.plan.yearPlan":{
                templateUrl : "root/developProgress/plan/yearPlan/export/_res/html/index.html",
                controller:'yearPlanExportCtrl'
            }
        }
    })
});