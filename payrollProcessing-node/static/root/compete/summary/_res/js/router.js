var app = angular.module('summary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.summary", {
        url : "/summary",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/summary/_res/html/index.html",
                controller:"summaryCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/summary/_res/html/menu.html",
                controller:"summaryMenuCtrl"
            }
        }
    }).state("root.compete.summary.departmentSummary[12]",{
        url:"/departmentSummary[12]",
        views:{
            "content@root.compete.summary":{
                templateUrl : "root/compete/summary/departmentSummary/_res/html/index.html",
                controller:'departmentSummaryCtrl'
            }
        }
    }).state("root.compete.summary.departmentAnalyze[12]",{
        url:"/departmentAnalyze[12]",
        views:{
            "content@root.compete.summary":{
                templateUrl : "root/compete/summary/departmentAnalyze/_res/html/index.html",
                controller:'departmentAnalyzeCtrl'
            }
        }
    }).state("root.compete.summary.oneSummary[12]",{
        url:"/oneSummary[12]",
        views:{
            "content@root.compete.summary":{
                templateUrl : "root/compete/summary/oneSummary/_res/html/index.html",
                controller:'oneSummaryCtrl'
            }
        }
    }).state("root.compete.summary.areasAnalyze[12]",{
        url:"/areasAnalyze[12]",
        views:{
            "content@root.compete.summary":{
                templateUrl : "root/compete/summary/areasAnalyze/_res/html/index.html",
                controller:'areasAnalyzeCtrl'
            }
        }
    }).state("root.compete.summary.oneAnalyze[12]",{
        url:"/oneAnalyze[12]",
        views:{
            "content@root.compete.summary":{
                templateUrl : "root/compete/summary/oneAnalyze/_res/html/index.html",
                controller:'oneAnalyzeCtrl'
            }
        }
    }).state("root.compete.summary.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.compete.summary":{
                templateUrl : "root/compete/summary/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    })
});