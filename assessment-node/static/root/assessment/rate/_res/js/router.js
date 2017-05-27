var app = angular.module('rate', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.rate", {
        url : "/rate",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/rate/_res/html/index.html",
                controller:"rateCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/rate/_res/html/menu.html",
                controller:"rateMenuCtrl"
            }
        }
    })
});