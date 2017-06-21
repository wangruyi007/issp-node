var app = angular.module('postlevel', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.postlevel", {
        url : "/postlevel",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/postlevel/_res/html/index.html",
                controller:"postlevelCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/postlevel/_res/html/menu.html",
                controller:"postlevelMenuCtrl"
            }
        }
    }).state("root.organize.management.postlevel.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.postlevel" : {
                templateUrl : "root/organize/management/postlevel/add/_res/html/index.html",
                controller:"postlevelAddCtrl"
            }
        }
    }).state("root.organize.management.postlevel.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management.postlevel" : {
                templateUrl : "root/organize/management/postlevel/edit/_res/html/index.html",
                controller:"postlevelEditCtrl"
            }
        }
    })
});

