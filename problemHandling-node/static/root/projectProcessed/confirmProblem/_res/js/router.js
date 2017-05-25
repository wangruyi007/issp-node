var app = angular.module('confirmProblem', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.confirmProblem", {
        url : "/confirmProblem",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/confirmProblem/_res/html/index.html",
                controller:"confirmCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/confirmProblem/_res/html/menu.html",
                controller:"confirmMenuCtrl"
            }
        }
    }).state("root.projectProcessed.confirmProblem.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/add/_res/html/index.html",
                controller:'confirmAddCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/edit/_res/html/index.html",
                controller:'confirmEditCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    })
});