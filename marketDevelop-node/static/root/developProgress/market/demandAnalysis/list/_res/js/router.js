var app = angular.module('demandAnalysisList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.market.demandAnalysis.list",{
        url:"/list",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/list/_res/html/index.html",
                controller:'demandAnalysisListCtrl'
            }
        }
    }).state("root.developProgress.market.demandAnalysis.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.market.demandAnalysis.list":{
                templateUrl : "root/developProgress/market/demandAnalysis/list/delete/_res/html/index.html",
                controller:'demandAnalysisDeleteCtrl'
            }
        }
     })
});