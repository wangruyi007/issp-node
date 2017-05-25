var app = angular.module('websiteList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.websiteInfo.list",{
        url:"/list",
        views:{
            "content@root.biddingManagement.websiteInfo":{
                templateUrl : "root/biddingManagement/websiteInfo/list/_res/html/index.html",
                controller:'websiteListCtrl'
            }
        }
    }).state("root.biddingManagement.websiteInfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.biddingManagement.websiteInfo.list":{
                templateUrl : "root/biddingManagement/websiteInfo/list/delete/_res/html/index.html",
                controller:'webDeleteCtrl'
            }
        }
     })
});