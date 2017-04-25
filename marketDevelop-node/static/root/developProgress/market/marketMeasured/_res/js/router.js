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
    }).state("root.developProgress.market.marketMeasured.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/add/_res/html/index.html",
                controller:'measuredAddCtrl'
            }
        }
    }).state("root.developProgress.market.marketMeasured.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.market.marketMeasured":{
                templateUrl : "root/developProgress/market/marketMeasured/edit/_res/html/index.html",
                controller:'measuredEditCtrl'
            }
        }
    })
});