var app = angular.module('progrowList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.progrow.list",{
        url:"/list",
        views:{
            "content@root.assessment.progrow":{
                templateUrl : "root/assessment/progrow/list/_res/html/index.html",
                controller:'progrowListCtrl'
            }
        }
    })
});