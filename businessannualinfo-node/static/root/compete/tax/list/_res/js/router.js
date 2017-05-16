var app = angular.module('taxList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.tax.list",{
        url:"/list",
        views:{
            "content@root.compete.tax":{
                templateUrl : "root/compete/tax/list/_res/html/index.html",
                controller:'taxListCtrl'
            }
        }
    }).state("root.compete.tax.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.tax.list":{
                templateUrl : "root/compete/tax/list/delete/_res/html/index.html",
                controller:'taxDeleteCtrl'
            }
        }
    }).state("root.compete.tax.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.compete.tax.list":{
                templateUrl : "root/compete/tax/list/congeal/_res/html/index.html",
                controller:'taxCongealCtrl'
            }
        }
    }).state("root.compete.tax.list.unfreeze[12]",{
        url:"/unfreeze[12]?id=",
        views:{
            "modal@root.compete.tax.list":{
                templateUrl : "root/compete/tax/list/unfreeze/_res/html/index.html",
                controller:'taxUnfreezeCtrl'
            }
        }
    })
});