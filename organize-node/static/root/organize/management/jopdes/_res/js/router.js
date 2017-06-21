var app = angular.module('jopdes', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.jopdes", {
        url : "/jopdes",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/jopdes/_res/html/index.html",
                controller:"jopdesCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/jopdes/_res/html/menu.html",
                controller:"jopdesMenuCtrl"
            }
        }
    }).state("root.organize.management.jopdes.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.jopdes" : {
                templateUrl : "root/organize/management/jopdes/add/_res/html/index.html",
                controller:"jopdesAddCtrl"
            }
        }
    }).state("root.organize.management.jopdes.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management.jopdes" : {
                templateUrl : "root/organize/management/jopdes/edit/_res/html/index.html",
                controller:"jopdesEditCtrl"
            }
        }
    }).state("root.organize.management.jopdes.view[12]", {
        url : "/view[12]?id=",
        views : {
            "content@root.organize.management.jopdes" : {
                templateUrl : "root/organize/management/jopdes/view/_res/html/index.html",
                controller:"jopdesViewCtrl"
            }
        }
    })
});

