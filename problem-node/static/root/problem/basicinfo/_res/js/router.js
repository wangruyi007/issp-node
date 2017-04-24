var app = angular.module('basicinfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.problem.basicinfo", {
        url : "/basicinfo",
        views : {
            "content@root.problem" : {
                templateUrl : "root/problem/basicinfo/_res/html/index.html",
                controller:"basicinfoCtrl"
            },"menu@root.problem" : {
                templateUrl : "root/problem/basicinfo/_res/html/menu.html",
                controller:"basicinfoMenuCtrl"
            }
        }
    })
});