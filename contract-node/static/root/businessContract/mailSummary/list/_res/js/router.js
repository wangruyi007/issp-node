var app = angular.module('mailSummaryList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.mailSummary.list",{
        url:"/list",
        views:{
            "content@root.businessContract.mailSummary":{
                templateUrl : "root/businessContract/mailSummary/list/_res/html/index.html",
                controller:'mailSummaryListCtrl'
            }
        }
    }).state("root.businessContract.mailSummary.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessContract.mailSummary.list":{
                templateUrl : "root/businessContract/mailSummary/list/delete/_res/html/index.html",
                controller:'deleteCtrl'
            }
        }
     }).state("root.businessContract.mailSummary.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.businessContract.mailSummary.list":{
                templateUrl : "root/businessContract/mailSummary/list/congeal/_res/html/index.html",
                controller:'congealCtrl'
            }
        }
     })
});