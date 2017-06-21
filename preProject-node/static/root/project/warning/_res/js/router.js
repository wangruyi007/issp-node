var app = angular.module('warning', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.warning", {
        url : "/warning",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/warning/_res/html/index.html",
                controller:"warningCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/warning/_res/html/menu.html",
                controller:"warningMenuCtrl"
            }
        }
    }).state("root.project.warning.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.warning":{
                templateUrl : "root/project/warning/add/_res/html/index.html",
                controller:'warningAddCtrl'
            }
        }
    }).state("root.project.warning.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.project.warning":{
                templateUrl : "root/project/warning/edit/_res/html/index.html",
                controller:'warningEditCtrl'
            }
        }
    })
});