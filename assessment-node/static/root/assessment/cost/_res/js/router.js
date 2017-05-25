var app = angular.module('cost', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.cost", {
        url : "/cost",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/cost/_res/html/index.html",
                controller:"costCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/cost/_res/html/menu.html",
                controller:"costMenuCtrl"
            }
        }
    }).state("root.assessment.cost.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assessment.cost":{
                templateUrl : "root/assessment/cost/add/_res/html/index.html",
                controller:'costAddCtrl'
            }
        }
    }).state("root.assessment.cost.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.assessment.cost":{
                templateUrl : "root/assessment/cost/edit/_res/html/index.html",
                controller:'costEditCtrl'
            }
        }
    })
});