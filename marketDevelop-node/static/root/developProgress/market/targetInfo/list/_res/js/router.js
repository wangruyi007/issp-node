var app = angular.module('targetInfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.targetInfo.list",{
        url:"/list",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/list/_res/html/index.html",
                controller:'targetInfoListCtrl'
            }
        }
    }).state("root.developProgress.market.targetInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.market.targetInfo.list":{
                templateUrl : "root/developProgress/market/targetInfo/list/delete/_res/html/index.html",
                controller:'targetInfoDeleteCtrl'
            }
        }
     })
});