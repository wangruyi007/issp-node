var app = angular.module('basicInfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.basicInfo.list",{
        url:"/list",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/list/_res/html/index.html",
                controller:'basicListCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessContract.basicInfo.list":{
                templateUrl : "root/businessContract/basicInfo/list/delete/_res/html/index.html",
                controller:'basicDeleteCtrl'
            }
        }
     })
});