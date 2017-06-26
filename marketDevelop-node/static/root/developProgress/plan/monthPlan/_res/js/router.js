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
    }).state("root.developProgress.plan.monthPlan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/list/_res/html/index.html",
                controller:'monthPlanListCtrl'
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
        url:"/edit[12]?id==&page=",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/edit/_res/html/index.html",
                controller:'monthPlanEditCtrl'
            }
        }
    }).state("root.developProgress.plan.monthPlan.upload[12]",{
        url:"/upload[12]?id==&page=",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/upload/_res/html/index.html",
                controller:'monthPlanUploadCtrl'
            }
        }
    }).state("root.developProgress.plan.monthPlan.view[12]",{
        url:"/view[12]?id=&view==&page=",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/view/_res/html/index.html",
                controller:'monthPlanViewCtrl'
            }
        }
    }).state("root.developProgress.plan.monthPlan.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.plan.monthPlan":{
                templateUrl : "root/developProgress/plan/monthPlan/export/_res/html/index.html",
                controller:'monthPlanExportCtrl'
            }
        }
    })
});