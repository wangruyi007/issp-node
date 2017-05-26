var app = angular.module('registered', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.registered", {
        url : "/registered",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/registered/_res/html/index.html",
                controller:"registeredCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/registered/_res/html/menu.html",
                controller:"registeredMenuCtrl"
            }
        }
    }).state("root.compete.registered.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.registered":{
                templateUrl : "root/compete/registered/add/_res/html/index.html",
                controller:'registeredAddCtrl'
            }
        }
    }).state("root.compete.registered.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.registered":{
                templateUrl : "root/compete/registered/edit/_res/html/index.html",
                controller:'registeredEditCtrl'
            }
        }
     })
});