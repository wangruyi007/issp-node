var app = angular.module('waitconfirm', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.waitconfirm", {
        url : "/waitconfirm",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/waitconfirm/_res/html/index.html",
                controller:"waitconfirmCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/waitconfirm/_res/html/menu.html",
                controller:"waitconfirmMenuCtrl"
            }
        }
    })
});