var app = angular.module('result', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.result", {
        url : "/result",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/result/_res/html/index.html",
                controller:"resultCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/result/_res/html/menu.html",
                controller:"resultMenuCtrl"
            }
        }
    }).state("root.assessment.result.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.result":{
                templateUrl : "root/assessment/result/add/_res/html/index.html",
                controller:'resultAddCtrl'
            }
        }
    }).state("root.assessment.result.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.result":{
                templateUrl : "root/assessment/result/edit/_res/html/index.html",
                controller:'resultEditCtrl'
            }
        }
    }).state("root.assessment.result.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.assessment.result":{
                templateUrl : "root/assessment/result/summary/_res/html/index.html",
                controller:'resultSummaryCtrl'
            }
        }
    }).state("root.assessment.result.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.assessment.result":{
                templateUrl : "root/assessment/result/list/_res/html/index.html",
                controller:'resultListCtrl'
            }
        }
    })
});