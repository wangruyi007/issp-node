var app = angular.module('project', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.project", {
        url : "/project",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/project/_res/html/index.html",
                controller:"projectCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/project/_res/html/menu.html",
                controller:"projectMenuCtrl"
            }
        }
    }).state("root.assessment.project.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.project":{
                templateUrl : "root/assessment/project/add/_res/html/index.html",
                controller:'projectAddCtrl'
            }
        }
    }).state("root.assessment.project.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.project":{
                templateUrl : "root/assessment/project/edit/_res/html/index.html",
                controller:'projectEditCtrl'
            }
        }
    })
});