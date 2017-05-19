var app = angular.module('costSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.cost.summary",{
        url:"/summary",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/summary/_res/html/index.html",
                controller:'costSummaryCtrl'
            }
        }
    })
});
