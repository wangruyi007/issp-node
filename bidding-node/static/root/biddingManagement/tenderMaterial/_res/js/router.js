var app = angular.module('tenderMaterial', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.tenderMaterial", {
        url : "/tenderMaterial",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderMaterial/_res/html/index.html",
                controller:"MaterialCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderMaterial/_res/html/menu.html",
                controller:"MaterialMenuCtrl"
            }
        }
    }).state("root.biddingManagement.tenderMaterial.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/add/_res/html/index.html",
                controller:'MaterialAddCtrl'
            }
        }
    }).state("root.biddingManagement.tenderMaterial.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/edit/_res/html/index.html",
                controller:'MaterialEditCtrl'
            }
        }
    })
});