var app = angular.module('weight', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.weightAllocation", {
        url : "/weightAllocation",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/weightAllocation/_res/html/index.html",
                controller:"weightCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/weightAllocation/_res/html/menu.html",
                controller:"weightMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.weightAllocation.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.weightAllocation":{
                templateUrl : "root/projectRoyalty/weightAllocation/list/_res/html/index.html",
                controller:'weightListCtrl'
            }
        }
    }).state("root.projectRoyalty.weightAllocation.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.weightAllocation":{
                templateUrl : "root/projectRoyalty/weightAllocation/add/_res/html/index.html",
                controller:'weightAddCtrl'
            }
        }
    }).state("root.projectRoyalty.weightAllocation.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.weightAllocation":{
                templateUrl : "root/projectRoyalty/weightAllocation/edit/_res/html/index.html",
                controller:'weighEditCtrl'
            }
        }
    })
});