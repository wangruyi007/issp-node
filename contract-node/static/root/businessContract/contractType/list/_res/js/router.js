var app = angular.module('contractTypeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.contractType.list",{
        url:"/list",
        views:{
            "content@root.businessContract.contractType":{
                templateUrl : "root/businessContract/contractType/list/_res/html/index.html",
                controller:'contractListCtrl'
            }
        }
    }).state("root.businessContract.contractType.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessContract.contractType.list":{
                templateUrl : "root/businessContract/contractType/list/delete/_res/html/index.html",
                controller:'contractDeleteCtrl'
            }
        }
     })
});