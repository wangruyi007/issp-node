var app = angular.module('information', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.information", {
        url : "/information",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/information/_res/html/index.html",
                controller:"informationCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/information/_res/html/menu.html",
                controller:"informationMenuCtrl"
            }
        }
    }).state("root.assessment.information.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.information":{
                templateUrl : "root/assessment/information/add/_res/html/index.html",
                controller:'informationAddCtrl'
            }
        }
    }).state("root.assessment.information.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.information":{
                templateUrl : "root/assessment/information/edit/_res/html/index.html",
                controller:'informationEditCtrl'
            }
        }
    })
});