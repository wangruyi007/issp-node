var app = angular.module('mailSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.mailSummary", {
        url : "/mailSummary",
        views : {
            "content@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/mailSummary/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/mailSummary/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.businessInteraction.mailSummary.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessInteraction.mailSummary":{
                templateUrl : "root/businessInteraction/mailSummary/add/_res/html/index.html",
                controller:'mailSummaryAddCtrl'
            }
        }
    }).state("root.businessInteraction.mailSummary.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessInteraction.mailSummary":{
                templateUrl : "root/businessInteraction/mailSummary/edit/_res/html/index.html",
                controller:'mailSummaryEditCtrl'
            }
        }
    }).state("root.businessInteraction.mailSummary.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.businessInteraction.mailSummary":{
                templateUrl : "root/businessInteraction/mailSummary/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    })
});