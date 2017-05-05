var app = angular.module('operation', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.operation", {
        url : "/operation",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/operation/_res/html/index.html",
                controller:"operationCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/operation/_res/html/menu.html",
                controller:"operationMenuCtrl"
            }
        }
    }).state("root.organize.management.operation.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.operation" : {
                templateUrl : "root/organize/management/operation/add/_res/html/index.html",
                controller:"operationAddCtrl"
            }
        }
    }).state("root.organize.management.operation.edit[12]", {
        url : "/edit[12]",
        views : {
            "content@root.organize.management.operation" : {
                templateUrl : "root/organize/management/operation/edit/_res/html/index.html",
                controller:"operationEditCtrl"
            }
        }
    })
});

