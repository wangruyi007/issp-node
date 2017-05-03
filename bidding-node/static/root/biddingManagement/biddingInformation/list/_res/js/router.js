var app = angular.module('infoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.biddingInformation.list",{
        url:"/list",
        views:{
            "content@root.biddingManagement.biddingInformation":{
                templateUrl : "root/biddingManagement/biddingInformation/list/_res/html/index.html",
                controller:'infoListCtrl'
            }
        }
    }).state("root.biddingManagement.biddingInformation.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.biddingManagement.biddingInformation.list":{
                templateUrl : "root/biddingManagement/biddingInformation/list/delete/_res/html/index.html",
                controller:'infoDeleteCtrl'
            }
        }
     })
});