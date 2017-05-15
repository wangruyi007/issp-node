var app = angular.module('relationshipList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.relationship.list",{
        url:"/list",
        views:{
            "content@root.assessment.relationship":{
                templateUrl : "root/assessment/relationship/list/_res/html/index.html",
                controller:'relationshipListCtrl'
            }
        }
    })
});