var app = angular.module('information', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.information", {
        url : "/information",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/information/_res/html/index.html",
                controller:"informationCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/information/_res/html/menu.html",
                controller:"informationMenuCtrl"
            }
        }
    }).state("root.compete.information.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.information":{
                templateUrl : "root/compete/information/add/_res/html/index.html",
                controller:'informationAddCtrl'
            }
        }
    }).state("root.compete.information.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.information":{
                templateUrl : "root/compete/information/edit/_res/html/index.html",
                controller:'informationEditCtrl'
            }
        }
    })
});