var app = angular.module('warning', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.warning", {
        url : "/warning",
        views : {
            "content@root.budget" : {
                templateUrl : "root/budget/warning/_res/html/index.html",
                controller:"warningCtrl"
            },"menu@root.budget" : {
                templateUrl : "root/budget/warning/_res/html/menu.html",
                controller:"warningMenuCtrl"
            }
        }
    }).state("root.budget.warning.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.budget.warning":{
                templateUrl : "root/budget/warning/add/_res/html/index.html",
                controller:'warningAddCtrl'
            }
        }
    }).state("root.budget.warning.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.budget.warning":{
                templateUrl : "root/budget/warning/edit/_res/html/index.html",
                controller:'warningEditCtrl'
            }
        }
    })
});