var app = angular.module('standardList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.standard.list",{
        url:"/list",
        views:{
            "content@root.contract.standard":{
                templateUrl : "root/contract/standard/list/_res/html/index.html",
                controller:'standardListCtrl'
            }
        }
    }).state("root.contract.standard.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.contract.standard.list":{
                templateUrl : "root/contract/standard/list/delete/_res/html/index.html",
                controller:'standardDeleteCtrl'
            }
        }
    }).state("root.contract.standard.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.contract.standard.list":{
                templateUrl : "root/contract/standard/list/congeal/_res/html/index.html",
                controller:'standardCongealCtrl'
            }
        }
    })
});