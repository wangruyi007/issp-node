var app = angular.module('taxInfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payable.taxInfo.list",{
        url:"/list",
        views:{
            "content@root.payable.taxInfo":{
                templateUrl : "root/payable/taxInfo/list/_res/html/index.html",
                controller:'taxInfoListCtrl'
            }
        }
    }).state("root.payable.taxInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.payable.taxInfo.list":{
                templateUrl : "root/payable/taxInfo/list/delete/_res/html/index.html",
                controller:'taxInfoDeleteCtrl'
            }
        }
     })
});