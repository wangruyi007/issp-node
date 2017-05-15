var app = angular.module('progrow', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.progrow", {
        url : "/progrow",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/progrow/_res/html/index.html",
                controller:"progrowCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/progrow/_res/html/menu.html",
                controller:"progrowMenuCtrl"
            }
        }
    })
});