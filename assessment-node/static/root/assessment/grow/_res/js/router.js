var app = angular.module('grow', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.grow", {
        url : "/grow",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/grow/_res/html/index.html",
                controller:"growCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/grow/_res/html/menu.html",
                controller:"growMenuCtrl"
            }
        }
    }).state("root.assessment.grow.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.grow":{
                templateUrl : "root/assessment/grow/add/_res/html/index.html",
                controller:'growAddCtrl'
            }
        }
    }).state("root.assessment.grow.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.grow":{
                templateUrl : "root/assessment/grow/edit/_res/html/index.html",
                controller:'growEditCtrl'
            }
        }
    })
});