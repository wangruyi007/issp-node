var app = angular.module('number', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.number", {
        url : "/number",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/number/_res/html/index.html",
                controller:"numberCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/number/_res/html/menu.html",
                controller:"numberMenuCtrl"
            }
        }
    }).state("root.organize.management.number.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/number/add/_res/html/index.html",
                controller:"numberAddCtrl"
            }
        }
    }).state("root.organize.management.number.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/number/edit/_res/html/index.html",
                controller:"numberEditCtrl"
            }
        }
    })
});

