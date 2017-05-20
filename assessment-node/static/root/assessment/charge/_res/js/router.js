var app = angular.module('charge', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.charge", {
        url : "/charge",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/charge/_res/html/index.html",
                controller:"chargeCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/charge/_res/html/menu.html",
                controller:"chargeMenuCtrl"
            }
        }
    }).state("root.assessment.charge.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.charge":{
                templateUrl : "root/assessment/charge/add/_res/html/index.html",
                controller:'chargeAddCtrl'
            }
        }
    }).state("root.assessment.charge.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.charge":{
                templateUrl : "root/assessment/charge/edit/_res/html/index.html",
                controller:'chargeEditCtrl'
            }
        }
    })
});