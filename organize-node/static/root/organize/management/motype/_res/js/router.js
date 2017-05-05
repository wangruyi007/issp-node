var app = angular.module('motype', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.motype", {
        url : "/motype",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/motype/_res/html/index.html",
                controller:"motypeCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/motype/_res/html/menu.html",
                controller:"motypeMenuCtrl"
            }
        }
    }).state("root.organize.management.motype.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.motype" : {
                templateUrl : "root/organize/management/motype/add/_res/html/index.html",
                controller:"motypeAddCtrl"
            }
        }
    }).state("root.organize.management.motype.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management.motype" : {
                templateUrl : "root/organize/management/motype/edit/_res/html/index.html",
                controller:"motypeEditCtrl"
            }
        }
    })
});

