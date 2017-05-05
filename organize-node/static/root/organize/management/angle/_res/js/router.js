var app = angular.module('angle', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.angle", {
        url : "/angle",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/angle/_res/html/index.html",
                controller:"angleCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/angle/_res/html/menu.html",
                controller:"angleMenuCtrl"
            }
        }
    }).state("root.organize.management.angle.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.angle" : {
                templateUrl : "root/organize/management/angle/add/_res/html/index.html",
                controller:"angleAddCtrl"
            }
        }
    }).state("root.organize.management.angle.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management.angle" : {
                templateUrl : "root/organize/management/angle/edit/_res/html/index.html",
                controller:"angleEditCtrl"
            }
        }
    })
});

