var app = angular.module('new', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.new", {
        url : "/new",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/new/_res/html/index.html",
                controller:"newCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/new/_res/html/menu.html",
                controller:"newMenuCtrl"
            }
        }
    })
});