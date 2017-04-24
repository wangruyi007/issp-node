var app = angular.module('demandAnalysis', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.demandAnalysis", {
        url : "/demandAnalysis",
        views : {
            "content@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/demandAnalysis/_res/html/index.html",
                controller:"demandAnalysisCtrl"
            },"menu@root.developProgress.market" : {
                templateUrl : "root/developProgress/market/demandAnalysis/_res/html/menu.html",
                controller:"demandAnalysisMenuCtrl"
            }
        }
    }).state("root.developProgress.market.demandAnalysis.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/add/_res/html/index.html",
                controller:'demandAnalysisAddCtrl'
            }
        }
    }).state("root.developProgress.market.demandAnalysis.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/edit/_res/html/index.html",
                controller:'demandAnalysisEditCtrl'
            }
        }
    })
});