var app = angular.module('dimen', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.dimen", {
        url : "/dimen",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/dimen/_res/html/index.html",
                controller:"dimenCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/dimen/_res/html/menu.html",
                controller:"dimenMenuCtrl"
            }
        }
    }).state("root.organize.management.dimen.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.dimen" : {
                templateUrl : "root/organize/management/dimen/add/_res/html/index.html",
                controller:"dimenAddCtrl"
            }
        }
    }).state("root.organize.management.dimen.edit[12]", {
        url : "/edit[12]",
        views : {
            "content@root.organize.management.dimen" : {
                templateUrl : "root/organize/management/dimen/edit/_res/html/index.html",
                controller:"dimenEditCtrl"
            }
        }
    })
});

