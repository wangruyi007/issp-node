var app = angular.module('relationship', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.relationship", {
        url : "/relationship",
        views : {
            "content@root.assessment" : {
                templateUrl : "root/assessment/relationship/_res/html/index.html",
                controller:"relationshipCtrl"
            },"menu@root.assessment" : {
                templateUrl : "root/assessment/relationship/_res/html/menu.html",
                controller:"relationshipMenuCtrl"
            }
        }
    })
});