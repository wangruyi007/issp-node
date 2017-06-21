var app = angular.module('system', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.system", {
        url : "/system",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/system/_res/html/index.html",
                controller:"systemCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/system/_res/html/menu.html",
                controller:"systemMenuCtrl"
            }
        }
    }).state("root.organize.management.system.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/system/add/_res/html/index.html",
                controller:"systemAddCtrl"
            }
        }
    }).state("root.organize.management.system.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/system/edit/_res/html/index.html",
                controller:"systemEditCtrl"
            }
        }
    })
});

