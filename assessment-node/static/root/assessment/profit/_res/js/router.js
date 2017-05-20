var app = angular.module('profit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.profit", {
        url : "/profit",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/profit/_res/html/index.html",
                controller:"profitCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/profit/_res/html/menu.html",
                controller:"profitMenuCtrl"
            }
        }
    })
});