var app = angular.module('confirmList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.confirmProblem.list",{
        url:"/list",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/list/_res/html/index.html",
                controller:'confirmListCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectProcessed.confirmProblem.list":{
                templateUrl : "root/projectProcessed/confirmProblem/list/delete/_res/html/index.html",
                controller:'confirmDeleteCtrl'
            }
        }
     })
});