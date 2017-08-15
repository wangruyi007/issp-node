var app = angular.module('period', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.collectionPeriod", {
        url : "/collectionPeriod",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/collectionPeriod/_res/html/index.html",
                controller:"periodCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/collectionPeriod/_res/html/menu.html",
                controller:"periodMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.collectionPeriod.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.collectionPeriod":{
                templateUrl : "root/projectRoyalty/collectionPeriod/list/_res/html/index.html",
                controller:'periodListCtrl'
            }
        }
    }).state("root.projectRoyalty.collectionPeriod.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.collectionPeriod":{
                templateUrl : "root/projectRoyalty/collectionPeriod/add/_res/html/index.html",
                controller:'periodAddCtrl'
            }
        }
    }).state("root.projectRoyalty.collectionPeriod.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.collectionPeriod":{
                templateUrl : "root/projectRoyalty/collectionPeriod/edit/_res/html/index.html",
                controller:'periodEditCtrl'
            }
        }
    })
});