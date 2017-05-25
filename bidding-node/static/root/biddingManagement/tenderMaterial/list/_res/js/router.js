var app = angular.module('MaterialList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.tenderMaterial.list",{
        url:"/list",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/list/_res/html/index.html",
                controller:'MaterialListCtrl'
            }
        }
    }).state("root.biddingManagement.tenderMaterial.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.biddingManagement.tenderMaterial.list":{
                templateUrl : "root/biddingManagement/tenderMaterial/list/delete/_res/html/index.html",
                controller:'MaterialDeleteCtrl'
            }
        }
     })
});