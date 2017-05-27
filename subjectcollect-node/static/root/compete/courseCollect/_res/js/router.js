var app = angular.module('courseCollect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.courseCollect", {
        url : "/courseCollect",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/courseCollect/_res/html/index.html",
                controller:"courseCollectCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/courseCollect/_res/html/menu.html",
                controller:"courseCollectMenuCtrl"
            }
        }
    }).state("root.compete.courseCollect.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/add/_res/html/index.html",
                controller:'courseCollectAddCtrl'
            }
        }
    }).state("root.compete.courseCollect.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/edit/_res/html/index.html",
                controller:'courseCollectEditCtrl'
            }
        }
    }).state("root.compete.courseCollect.export[12]",{
        url:"/export[12]?id=",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/export/_res/html/index.html",
                controller:'courseCollectExportCtrl'
            }
        }
    }).state("root.compete.courseCollect.subjectsSummary[12]",{
        url:"/subjectsSummary[12]",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/subjectsSummary/_res/html/index.html",
                controller:'subjectsSummaryCtrl'
            }
        }
    }).state("root.compete.courseCollect.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.compete.courseCollect.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.compete.courseCollect.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    }).state("root.compete.courseCollect.contrast[12]",{
        url:"/contrast[12]",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/contrast/_res/html/index.html",
                controller:'courseCollectContrastCtrl'
            }
        }
    })
});