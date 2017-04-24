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
    }).state("root.developProgress.market.marketMining.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/add/_res/html/index.html",
                controller:'marketMiningAddCtrl'
            }
        }
    }).state("root.developProgress.market.marketMining.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.market.marketMining":{
                templateUrl : "root/developProgress/market/marketMining/edit/_res/html/index.html",
                controller:'marketMiningEditCtrl'
            }
        }
    })
});