var app = angular.module('growList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.grow.list",{
        url:"/list",
        views:{
            "content@root.assessment.grow":{
                templateUrl : "root/assessment/grow/list/_res/html/index.html",
                controller:'growListCtrl'
            }
        }
    }).state("root.assessment.grow.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.grow.list":{
                templateUrl : "root/assessment/grow/list/delete/_res/html/index.html",
                controller:'growDeleteCtrl'
            }
        }
     })
});