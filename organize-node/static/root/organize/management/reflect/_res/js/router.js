var app = angular.module('reflect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.reflect", {
        url : "/reflect",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/reflect/_res/html/index.html",
                controller:"reflectCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/reflect/_res/html/menu.html",
                controller:"reflectMenuCtrl"
            }
        }
    }).state("root.organize.management.reflect.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.reflect" : {
                templateUrl : "root/organize/management/reflect/add/_res/html/index.html",
                controller:"reflectAddCtrl"
            }
        }
    }).state("root.organize.management.reflect.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management.reflect" : {
                templateUrl : "root/organize/management/reflect/edit/_res/html/index.html",
                controller:"reflectEditCtrl"
            }
        }
    })
});

