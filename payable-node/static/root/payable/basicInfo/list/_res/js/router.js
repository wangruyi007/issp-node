var app = angular.module('basicInfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payable.basicInfo.list",{
        url:"/list",
        views:{
            "content@root.payable.basicInfo":{
                templateUrl : "root/payable/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    }).state("root.payable.basicInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.payable.basicInfo.list":{
                templateUrl : "root/payable/basicInfo/list/delete/_res/html/index.html",
                controller:'basicInfoDeleteCtrl'
            }
        }
     })
});