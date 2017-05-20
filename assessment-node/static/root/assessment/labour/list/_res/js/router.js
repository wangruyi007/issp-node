var app = angular.module('labourList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assessment.labour.list",{
        url:"/list",
        views:{
            "content@root.assessment.labour":{
                templateUrl : "root/assessment/labour/list/_res/html/index.html",
                controller:'labourListCtrl'
            }
        }
    }).state("root.assessment.labour.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.assessment.labour.list":{
                templateUrl : "root/assessment/labour/list/delete/_res/html/index.html",
                controller:'labourDeleteCtrl'
            }
        }
     })
});