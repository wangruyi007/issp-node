var app = angular.module('marketMiningList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.marketMining.list",{
        url:"/list",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/list/_res/html/index.html",
                controller:'marketMiningListCtrl'
            }
        }
    }).state("root.developProgress.market.marketMining.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.market.marketMining.list":{
                templateUrl : "root/developProgress/market/marketMining/list/delete/_res/html/index.html",
                controller:'marketMiningDeleteCtrl'
            }
        }
     })
});