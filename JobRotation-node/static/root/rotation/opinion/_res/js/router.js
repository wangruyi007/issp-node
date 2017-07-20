var app = angular.module('opinion', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.opinion", {
        url : "/opinion",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/opinion/_res/html/index.html",
                controller:"MaterialCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/opinion/_res/html/menu.html",
                controller:"MaterialMenuCtrl"
            }
        }
    }).state("root.rotation.opinion.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.rotation.opinion":{
                templateUrl : "root/rotation/opinion/list/_res/html/index.html",
                controller:'MaterialListCtrl'
            }
        }
    }).state("root.rotation.opinion.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.rotation.opinion":{
                templateUrl : "root/rotation/opinion/add/_res/html/index.html",
                controller:'MaterialAddCtrl'
            }
        }
    }).state("root.rotation.opinion.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.rotation.opinion":{
                templateUrl : "root/rotation/opinion/edit/_res/html/index.html",
                controller:'MaterialEditCtrl'
            }
        }
    }).state("root.rotation.opinion.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.rotation.opinion":{
                templateUrl : "root/rotation/opinion/export/_res/html/index.html",
                controller:'MaterialExportCtrl'
            }
        }
    }).state("root.rotation.opinion.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.rotation.opinion":{
                templateUrl : "root/rotation/opinion/upload/_res/html/index.html",
                controller:'MaterialUploadCtrl'
            }
        }
    }).state("root.rotation.opinion.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.rotation.opinion":{
                templateUrl : "root/rotation/opinion/view/_res/html/index.html",
                controller:'MaterialViewCtrl'
            }
        }
    })
});