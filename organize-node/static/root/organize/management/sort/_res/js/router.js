var app = angular.module('sort', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.sort", {
        url : "/sort",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/sort/_res/html/index.html",
                controller:"sortCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/sort/_res/html/menu.html",
                controller:"sortMenuCtrl"
            }
        }
    }).state("root.organize.management.sort.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.sort" : {
                templateUrl : "root/organize/management/sort/add/_res/html/index.html",
                controller:"sortAddCtrl"
            }
        }
    }).state("root.organize.management.sort.edit[12]", {
        url : "/edit[12]",
        views : {
            "content@root.organize.management.sort" : {
                templateUrl : "root/organize/management/sort/edit/_res/html/index.html",
                controller:"sortEditCtrl"
            }
        }
    })
});

