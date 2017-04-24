var app = angular.module('businessTypeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.other.businessType.list",{
        url:"/list",
        views:{
            "content@root.developProgress.other.businessType":{
                templateUrl : "root/developProgress/other/businessType/list/_res/html/index.html",
                controller:'typeListCtrl'
            }
        }
    }).state("root.developProgress.other.businessType.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.developProgress.other.businessType.list":{
                templateUrl : "root/developProgress/other/businessType/list/delete/_res/html/index.html",
                controller:'typeDeleteCtrl'
            }
        }
     }).state("root.developProgress.other.businessType.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.developProgress.other.businessType.list":{
                templateUrl : "root/developProgress/other/businessType/list/congeal/_res/html/index.html",
                controller:'typeCongealCtrl'
            }
        }
     })
});