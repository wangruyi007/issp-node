var app = angular.module('actual', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.actualWeight", {
        url : "/actualWeight",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/actualWeight/_res/html/index.html",
                controller:"actualCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/actualWeight/_res/html/menu.html",
                controller:"actualMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.actualWeight.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.actualWeight":{
                templateUrl : "root/projectRoyalty/actualWeight/list/_res/html/index.html",
                controller:'actualListCtrl'
            }
        }
    }).state("root.projectRoyalty.actualWeight.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.actualWeight":{
                templateUrl : "root/projectRoyalty/actualWeight/add/_res/html/index.html",
                controller:'actualAddCtrl'
            }
        }
    }).state("root.projectRoyalty.actualWeight.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.actualWeight":{
                templateUrl : "root/projectRoyalty/actualWeight/edit/_res/html/index.html",
                controller:'actualEditCtrl'
            }
        }
    })
});