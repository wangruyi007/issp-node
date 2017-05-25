var app = angular.module('rateList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.rate.list",{
        url:"/list",
        views:{
            "content@root.assessment.rate":{
                templateUrl : "root/assessment/rate/list/_res/html/index.html",
                controller:'rateListCtrl'
            }
        }
    })
});