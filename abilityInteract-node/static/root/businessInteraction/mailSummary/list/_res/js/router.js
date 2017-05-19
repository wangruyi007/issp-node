var app = angular.module('mailSummaryList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.mailSummary.list",{
        url:"/list",
        views:{
            "content@root.businessInteraction.mailSummary":{
                templateUrl : "root/businessInteraction/mailSummary/list/_res/html/index.html",
                controller:'mailSummaryListCtrl'
            }
        }
    }).state("root.businessInteraction.mailSummary.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessInteraction.mailSummary.list":{
                templateUrl : "root/businessInteraction/mailSummary/list/delete/_res/html/index.html",
                controller:'deleteCtrl'
            }
        }
     }).state("root.businessInteraction.mailSummary.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.businessInteraction.mailSummary.list":{
                templateUrl : "root/businessInteraction/mailSummary/list/congeal/_res/html/index.html",
                controller:'congealCtrl'
            }
        }
     })
});