var app = angular.module('resultList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.result.list",{
        url:"/list",
        views:{
            "content@root.assessment.result":{
                templateUrl : "root/assessment/result/list/_res/html/index.html",
                controller:'resultListCtrl'
            }
        }
    }).state("root.assessment.result.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.result.list":{
                templateUrl : "root/assessment/result/list/delete/_res/html/index.html",
                controller:'resultDeleteCtrl'
            }
        }
    }).state("root.assessment.result.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.assessment.result.list":{
                templateUrl : "root/assessment/result/list/congeal/_res/html/index.html",
                controller:'resultCongealCtrl'
            }
        }
    })
});