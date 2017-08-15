var app = angular.module('quota', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.actualQuota", {
        url : "/actualQuota",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/actualQuota/_res/html/index.html",
                controller:"quotaCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/actualQuota/_res/html/menu.html",
                controller:"quotaMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.actualQuota.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.actualQuota":{
                templateUrl : "root/projectRoyalty/actualQuota/list/_res/html/index.html",
                controller:'quotaListCtrl'
            }
        }
    }).state("root.projectRoyalty.actualQuota.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.actualQuota":{
                templateUrl : "root/projectRoyalty/actualQuota/add/_res/html/index.html",
                controller:'quotaAddCtrl'
            }
        }
    }).state("root.projectRoyalty.actualQuota.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.actualQuota":{
                templateUrl : "root/projectRoyalty/actualQuota/edit/_res/html/index.html",
                controller:'quotaEditCtrl'
            }
        }
    })
});