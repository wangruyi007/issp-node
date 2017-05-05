var app = angular.module('userjop', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.userjop", {
        url : "/userjop",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/userjop/_res/html/index.html",
                controller:"userjopCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/userjop/_res/html/menu.html",
                controller:"userjopMenuCtrl"
            }
        }
    }).state("root.organize.management.userjop.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.userjop" : {
                templateUrl : "root/organize/management/userjop/add/_res/html/index.html",
                controller:"userjopAddCtrl"
            }
        }
    }).state("root.organize.management.userjop.edit[12]", {
        url : "/edit[12]",
        views : {
            "content@root.organize.management.userjop" : {
                templateUrl : "root/organize/management/userjop/edit/_res/html/index.html",
                controller:"userjopEditCtrl"
            }
        }
    })
});

