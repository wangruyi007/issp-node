var app = angular.module('openingList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.openingInfo.list",{
        url:"/list",
        views:{
            "content@root.biddingManagement.openingInfo":{
                templateUrl : "root/biddingManagement/openingInfo/list/_res/html/index.html",
                controller:'openingListCtrl'
            }
        }
    }).state("root.biddingManagement.openingInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.biddingManagement.openingInfo.list":{
                templateUrl : "root/biddingManagement/openingInfo/list/delete/_res/html/index.html",
                controller:'openingDeleteCtrl'
            }
        }
     })
});