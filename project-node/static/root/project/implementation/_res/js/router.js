var app = angular.module('implementation', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.implementation", {
        url : "/implementation",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/implementation/_res/html/index.html",
                controller:"implementationCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/implementation/_res/html/menu.html",
                controller:"implementationMenuCtrl"
            }
        }
    }).state("root.project.implementation.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.implementation":{
                templateUrl : "root/project/implementation/add/_res/html/index.html",
                controller:'implementationAddCtrl'
            }
        }
    }).state("root.project.implementation.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.project.implementation":{
                templateUrl : "root/project/implementation/edit/_res/html/index.html",
                controller:'implementationEditCtrl'
            }
        }
    })
});