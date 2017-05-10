var app = angular.module('materialList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.material.list",{
        url:"/list",
        views:{
            "content@root.contract.material":{
                templateUrl : "root/contract/material/list/_res/html/index.html",
                controller:'materialListCtrl'
            }
        }
    }).state("root.contract.material.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.contract.material.list":{
                templateUrl : "root/contract/material/list/delete/_res/html/index.html",
                controller:'materialDeleteCtrl'
            }
        }
    }).state("root.contract.material.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.contract.material.list":{
                templateUrl : "root/contract/material/list/congeal/_res/html/index.html",
                controller:'materialCongealCtrl'
            }
        }
    })
});