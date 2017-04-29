var app = angular.module('summaryProblem', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.summaryProblem", {
        url : "/summaryProblem",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/summaryProblem/_res/html/index.html",
                controller:"summaryCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/summaryProblem/_res/html/menu.html",
                controller:"summaryMenuCtrl"
            }
        }
    })
});