var app = angular.module('labour', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.labour", {
        url : "/labour",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/labour/_res/html/index.html",
                controller:"labourCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/labour/_res/html/menu.html",
                controller:"labourMenuCtrl"
            }
        }
    }).state("root.assessment.labour.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.labour":{
                templateUrl : "root/assessment/labour/add/_res/html/index.html",
                controller:'labourAddCtrl'
            }
        }
    }).state("root.assessment.labour.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.labour":{
                templateUrl : "root/assessment/labour/edit/_res/html/index.html",
                controller:'labourEditCtrl'
            }
        }
    })
});