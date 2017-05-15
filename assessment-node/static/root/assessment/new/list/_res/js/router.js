var app = angular.module('newList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.new.list",{
        url:"/list",
        views:{
            "content@root.assessment.new":{
                templateUrl : "root/assessment/new/list/_res/html/index.html",
                controller:'newListCtrl'
            }
        }
    })
});