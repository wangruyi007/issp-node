var app = angular.module('target', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.targetQuota", {
        url : "/targetQuota",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/targetQuota/_res/html/index.html",
                controller:"targetCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/targetQuota/_res/html/menu.html",
                controller:"targetMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.targetQuota.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.targetQuota":{
                templateUrl : "root/projectRoyalty/targetQuota/list/_res/html/index.html",
                controller:'targetListCtrl'
            }
        }
    }).state("root.projectRoyalty.targetQuota.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.targetQuota":{
                templateUrl : "root/projectRoyalty/targetQuota/add/_res/html/index.html",
                controller:'targetAddCtrl'
            }
        }
    }).state("root.projectRoyalty.targetQuota.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.targetQuota":{
                templateUrl : "root/projectRoyalty/targetQuota/edit/_res/html/index.html",
                controller:'targetEditCtrl'
            }
        }
    })
});