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
    }).state("root.developProgress.plan.weekPlan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/list/_res/html/index.html",
                controller:'weekPlanListCtrl'
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
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/edit/_res/html/index.html",
                controller:'weekPlanEditCtrl'
            }
        }
    }).state("root.developProgress.plan.weekPlan.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/upload/_res/html/index.html",
                controller:'weekPlanUploadCtrl'
            }
        }
    }).state("root.developProgress.plan.weekPlan.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/view/_res/html/index.html",
                controller:'weekPlanViewCtrl'
            }
        }
    }).state("root.developProgress.plan.weekPlan.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.plan.weekPlan":{
                templateUrl : "root/developProgress/plan/weekPlan/export/_res/html/index.html",
                controller:'weekPlanExportCtrl'
            }
        }
    })
});