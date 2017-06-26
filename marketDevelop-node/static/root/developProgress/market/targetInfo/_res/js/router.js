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
    }).state("root.developProgress.market.targetInfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/list/_res/html/index.html",
                controller:'targetInfoListCtrl'
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
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/edit/_res/html/index.html",
                controller:'targetInfoEditCtrl'
            }
        }
    }).state("root.developProgress.market.targetInfo.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/upload/_res/html/index.html",
                controller:'targetInfoUploadCtrl'
            }
        }
    }).state("root.developProgress.market.targetInfo.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/view/_res/html/index.html",
                controller:'targetInfoViewCtrl'
            }
        }
    }).state("root.developProgress.market.targetInfo.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.market.targetInfo":{
                templateUrl : "root/developProgress/market/targetInfo/export/_res/html/index.html",
                controller:'targetInfoExportCtrl'
            }
        }
    })
});