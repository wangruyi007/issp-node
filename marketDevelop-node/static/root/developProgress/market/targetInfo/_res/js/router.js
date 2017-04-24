var app = angular.module('targetInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.targetInfo", {
        url : "/targetInfo",
        views : {
            "content@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/targetInfo/_res/html/index.html",
                controller:"targetInfoCtrl"
            },"menu@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/targetInfo/_res/html/menu.html",
                controller:"targetInfoMenuCtrl"
            }
        }
    }).state("root.developProgress.market.targetInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/add/_res/html/index.html",
                controller:'targetInfoAddCtrl'
            }
        }
    }).state("root.developProgress.market.targetInfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/edit/_res/html/index.html",
                controller:'targetInfoEditCtrl'
            }
        }
    })
});