var app = angular.module('mailSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.mailSummary", {
        url : "/mailSummary",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/mailSummary/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/mailSummary/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.businessContract.mailSummary.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.businessContract.mailSummary":{
                templateUrl : "root/businessContract/mailSummary/list/_res/html/index.html",
                controller:'mailSummaryListCtrl'
            }
        }
    }).state("root.businessContract.mailSummary.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.mailSummary":{
                templateUrl : "root/businessContract/mailSummary/add/_res/html/index.html",
                controller:'mailSummaryAddCtrl'
            }
        }
    }).state("root.businessContract.mailSummary.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.businessContract.mailSummary":{
                templateUrl : "root/businessContract/mailSummary/edit/_res/html/index.html",
                controller:'mailSummaryEditCtrl'
            }
        }
    }).state("root.businessContract.mailSummary.signSummary[12]",{
        url:"/signSummary[12]",
        views:{
            "content@root.businessContract.mailSummary":{
                templateUrl : "root/businessContract/mailSummary/signSummary/_res/html/index.html",
                controller:'signSummaryCtrl'
            }
        }
    }).state("root.businessContract.mailSummary.basicSummary[12]",{
        url:"/basicSummary[12]",
        views:{
            "content@root.businessContract.mailSummary":{
                templateUrl : "root/businessContract/mailSummary/basicSummary/_res/html/index.html",
                controller:'basicSummaryCtrl'
            }
        }
    }).state("root.businessContract.mailSummary.dispatchSummary[12]",{
        url:"/dispatchSummary[12]",
        views:{
            "content@root.businessContract.mailSummary":{
                templateUrl : "root/businessContract/mailSummary/dispatchSummary/_res/html/index.html",
                controller:'dispatchSummaryCtrl'
            }
        }
    })
});