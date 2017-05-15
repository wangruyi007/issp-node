var app = angular.module('summaryList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.finance.summary.list",{
        url:"/list",
        views:{
            "content@root.finance.summary":{
                templateUrl : "root/finance/summary/list/_res/html/index.html",
                controller:'summaryListCtrl'
            }
        }
    }).state("root.finance.summary.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.finance.summary.list":{
                templateUrl : "root/finance/summary/list/delete/_res/html/index.html",
                controller:'summaryDeleteCtrl'
            }
        }
    })
});