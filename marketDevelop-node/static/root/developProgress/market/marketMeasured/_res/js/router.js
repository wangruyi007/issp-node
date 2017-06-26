var app = angular.module('marketMeasured', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.marketMeasured", {
        url : "/marketMeasured",
        views : {
            "content@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/marketMeasured/_res/html/index.html",
                controller:"measuredCtrl"
            },"menu@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/marketMeasured/_res/html/menu.html",
                controller:"measuredMenuCtrl"
            }
        }
    }).state("root.developProgress.market.marketMeasured.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/list/_res/html/index.html",
                controller:'measuredListCtrl'
            }
        }
    }).state("root.developProgress.market.marketMeasured.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/add/_res/html/index.html",
                controller:'measuredAddCtrl'
            }
        }
    }).state("root.developProgress.market.marketMeasured.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/edit/_res/html/index.html",
                controller:'measuredEditCtrl'
            }
        }
    }).state("root.developProgress.market.marketMeasured.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/upload/_res/html/index.html",
                controller:'measuredUploadCtrl'
            }
        }
    }).state("root.developProgress.market.marketMeasured.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/view/_res/html/index.html",
                controller:'measuredViewCtrl'
            }
        }
    }).state("root.developProgress.market.marketMeasured.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/export/_res/html/index.html",
                controller:'measuredExportCtrl'
            }
        }
    })
});