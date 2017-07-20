var app = angular.module('statistical', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.statistical", {
        url : "/statistical",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/statistical/_res/html/index.html",
                controller:"statiCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/statistical/_res/html/menu.html",
                controller:"statiMenuCtrl"
            }
        }
    }).state("root.rotation.statistical.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.rotation.statistical":{
                templateUrl : "root/rotation/statistical/list/_res/html/index.html",
                controller:'statiListCtrl'
            }
        }
    }).state("root.rotation.statistical.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.rotation.statistical":{
                templateUrl : "root/rotation/statistical/add/_res/html/index.html",
                controller:'statiAddCtrl'
            }
        }
    }).state("root.rotation.statistical.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.rotation.statistical":{
                templateUrl : "root/rotation/statistical/edit/_res/html/index.html",
                controller:'statiEditCtrl'
            }
        }
    }).state("root.rotation.statistical.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.rotation.statistical":{
                templateUrl : "root/rotation/statistical/export/_res/html/index.html",
                controller:'statiExportCtrl'
            }
        }
    }).state("root.rotation.statistical.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.rotation.statistical":{
                templateUrl : "root/rotation/statistical/upload/_res/html/index.html",
                controller:'statiUploadCtrl'
            }
        }
    }).state("root.rotation.statistical.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.rotation.statistical":{
                templateUrl : "root/rotation/statistical/view/_res/html/index.html",
                controller:'statiViewCtrl'
            }
        }
    })
});