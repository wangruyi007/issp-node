var app = angular.module('joprange', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.joprange", {
        url : "/joprange",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/joprange/_res/html/index.html",
                controller:"joprangeCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/joprange/_res/html/menu.html",
                controller:"joprangeMenuCtrl"
            }
        }
    }).state("root.organize.management.joprange.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.joprange" : {
                templateUrl : "root/organize/management/joprange/add/_res/html/index.html",
                controller:"joprangeAddCtrl"
            }
        }
    }).state("root.organize.management.joprange.edit[12]", {
        url : "/edit[12]",
        views : {
            "content@root.organize.management.joprange" : {
                templateUrl : "root/organize/management/joprange/edit/_res/html/index.html",
                controller:"joprangeEditCtrl"
            }
        }
    })
});

