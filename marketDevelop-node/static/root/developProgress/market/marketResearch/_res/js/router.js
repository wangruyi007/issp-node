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
    }).state("root.developProgress.market.marketResearch.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/add/_res/html/index.html",
                controller:'researchAddCtrl'
            }
        }
    }).state("root.developProgress.market.marketResearch.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.market.marketResearch":{
                templateUrl : "root/developProgress/market/marketResearch/edit/_res/html/index.html",
                controller:'researchEditCtrl'
            }
        }
    })
});