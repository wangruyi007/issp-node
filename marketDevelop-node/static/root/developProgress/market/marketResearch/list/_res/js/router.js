var app = angular.module('researchList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.marketResearch.list",{
        url:"/list",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/list/_res/html/index.html",
                controller:'researchListCtrl'
            }
        }
    }).state("root.developProgress.market.marketResearch.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.market.marketResearch.list":{
                templateUrl : "root/developProgress/market/marketResearch/list/delete/_res/html/index.html",
                controller:'researchDeleteCtrl'
            }
        }
     })
});