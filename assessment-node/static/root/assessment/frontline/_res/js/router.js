var app = angular.module('frontline', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.frontline", {
        url : "/frontline",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/frontline/_res/html/index.html",
                controller:"frontlineCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/frontline/_res/html/menu.html",
                controller:"frontlineMenuCtrl"
            }
        }
    }).state("root.assessment.frontline.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.frontline":{
                templateUrl : "root/assessment/frontline/add/_res/html/index.html",
                controller:'frontlineAddCtrl'
            }
        }
    }).state("root.assessment.frontline.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.frontline":{
                templateUrl : "root/assessment/frontline/edit/_res/html/index.html",
                controller:'frontlineEditCtrl'
            }
        }
    })
});