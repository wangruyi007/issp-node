var app = angular.module('marketResearch', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.marketResearch", {
        url : "/marketResearch",
        views : {
            "content@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/marketResearch/_res/html/index.html",
                controller:"marketResearchCtrl"
            },"menu@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/marketResearch/_res/html/menu.html",
                controller:"marketResearchMenuCtrl"
            }
        }
    }).state("root.developProgress.market.marketResearch.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/list/_res/html/index.html",
                controller:'researchListCtrl'
            }
        }
    }).state("root.developProgress.market.marketResearch.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/add/_res/html/index.html",
                controller:'researchAddCtrl'
            }
        }
    }).state("root.developProgress.market.marketResearch.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/edit/_res/html/index.html",
                controller:'researchEditCtrl'
            }
        }
    }).state("root.developProgress.market.marketResearch.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/upload/_res/html/index.html",
                controller:'researchUploadCtrl'
            }
        }
    }).state("root.developProgress.market.marketResearch.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/view/_res/html/index.html",
                controller:'researchViewCtrl'
            }
        }
    }).state("root.developProgress.market.marketResearch.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/export/_res/html/index.html",
                controller:'researchExportCtrl'
            }
        }
    })
});