var app = angular.module('basicInfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.subsidiary.basicInfo.list",{
        url:"/list",
        views:{
            "content@root.subsidiary.basicInfo":{
                templateUrl : "root/subsidiary/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    }).state("root.subsidiary.basicInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.subsidiary.basicInfo.list":{
                templateUrl : "root/subsidiary/basicInfo/list/delete/_res/html/index.html",
                controller:'basicInfoDeleteCtrl'
            }
        }
     })
});