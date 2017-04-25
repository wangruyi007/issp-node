var app = angular.module('measuredList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.marketMeasured.list",{
        url:"/list",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/list/_res/html/index.html",
                controller:'measuredListCtrl'
            }
        }
    }).state("root.developProgress.market.marketMeasured.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.market.marketMeasured.list":{
                templateUrl : "root/developProgress/market/marketMeasured/list/delete/_res/html/index.html",
                controller:'measuredDeleteCtrl'
            }
        }
     })
});