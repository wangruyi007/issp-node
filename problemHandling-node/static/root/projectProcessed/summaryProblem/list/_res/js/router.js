var app = angular.module('summaryList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.summaryProblem.list",{
        url:"/list",
        views:{
            "content@root.projectProcessed.summaryProblem":{
                templateUrl : "root/projectProcessed/summaryProblem/list/_res/html/index.html",
                controller:'summaryListCtrl'
            }
        }
    })
});