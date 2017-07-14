var app = angular.module('marketMining', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.marketMining", {
        url : "/marketMining",
        views : {
            "content@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/marketMining/_res/html/index.html",
                controller:"marketMiningCtrl"
            },"menu@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/marketMining/_res/html/menu.html",
                controller:"marketMiningMenuCtrl"
            }
        }
    }).state("root.developProgress.market.marketMining.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/list/_res/html/index.html",
                controller:'marketMiningListCtrl'
            }
        }
    }).state("root.developProgress.market.marketMining.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/add/_res/html/index.html",
                controller:'marketMiningAddCtrl'
            }
        }
    }).state("root.developProgress.market.marketMining.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/edit/_res/html/index.html",
                controller:'marketMiningEditCtrl'
            }
        }
    }).state("root.developProgress.market.marketMining.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/upload/_res/html/index.html",
                controller:'marketMiningUploadCtrl'
            }
        }
    }).state("root.developProgress.market.marketMining.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/view/_res/html/index.html",
                controller:'marketMiningViewCtrl'
            }
        }
    }).state("root.developProgress.market.marketMining.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/export/_res/html/index.html",
                controller:'marketMiningExportCtrl'
            }
        }
    })
});