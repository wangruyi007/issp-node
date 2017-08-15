var app = angular.module('time', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.completionTime", {
        url : "/completionTime",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/completionTime/_res/html/index.html",
                controller:"timeCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/completionTime/_res/html/menu.html",
                controller:"timeMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.completionTime.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.completionTime":{
                templateUrl : "root/projectRoyalty/completionTime/list/_res/html/index.html",
                controller:'timeListCtrl'
            }
        }
    }).state("root.projectRoyalty.completionTime.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.completionTime":{
                templateUrl : "root/projectRoyalty/completionTime/add/_res/html/index.html",
                controller:'timeAddCtrl'
            }
        }
    }).state("root.projectRoyalty.completionTime.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.completionTime":{
                templateUrl : "root/projectRoyalty/completionTime/edit/_res/html/index.html",
                controller:'timeEditCtrl'
            }
        }
    })
});