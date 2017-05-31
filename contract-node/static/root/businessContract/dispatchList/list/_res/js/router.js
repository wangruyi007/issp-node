var app = angular.module('dispatchWorkList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.dispatchList.list",{
        url:"/list",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/list/_res/html/index.html",
                controller:'dispatchWorkCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessContract.dispatchList.list":{
                templateUrl : "root/businessContract/dispatchList/list/delete/_res/html/index.html",
                controller:'dispatchDeleteCtrl'
            }
        }
     })
});