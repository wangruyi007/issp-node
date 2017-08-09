var app = angular.module('quota', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.ratio", {
        url : "/ratio",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/ratio/_res/html/index.html",
                controller:"ratioCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/ratio/_res/html/menu.html",
                controller:"ratioMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.ratio.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.ratio":{
                templateUrl : "root/projectRoyalty/ratio/list/_res/html/index.html",
                controller:'ratioListCtrl'
            }
        }
    }).state("root.projectRoyalty.ratio.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.ratio":{
                templateUrl : "root/projectRoyalty/ratio/add/_res/html/index.html",
                controller:'ratioAddCtrl'
            }
        }
    }).state("root.projectRoyalty.ratio.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.ratio":{
                templateUrl : "root/projectRoyalty/ratio/edit/_res/html/index.html",
                controller:'ratioEditCtrl'
            }
        }
    })
});