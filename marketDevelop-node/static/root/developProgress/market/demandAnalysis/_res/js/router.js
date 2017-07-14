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
    }).state("root.developProgress.market.demandAnalysis.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/list/_res/html/index.html",
                controller:'demandAnalysisListCtrl'
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
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/edit/_res/html/index.html",
                controller:'demandAnalysisEditCtrl'
            }
        }
    }).state("root.developProgress.market.demandAnalysis.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/upload/_res/html/index.html",
                controller:'analysisUploadCtrl'
            }
        }
    }).state("root.developProgress.market.demandAnalysis.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/view/_res/html/index.html",
                controller:'analysisViewCtrl'
            }
        }
    }).state("root.developProgress.market.demandAnalysis.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.market.demandAnalysis":{
                templateUrl : "root/developProgress/market/demandAnalysis/export/_res/html/index.html",
                controller:'analysisExportCtrl'
            }
        }
    })
});