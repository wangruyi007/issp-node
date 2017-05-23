var app = angular.module('costList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.cost.list",{
        url:"/list",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/list/_res/html/index.html",
                controller:'costListCtrl'
            }
        }
    }).state("root.project.cost.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.project.cost.list":{
                templateUrl : "root/project/cost/list/delete/_res/html/index.html",
                controller:'costDeleteCtrl'
            }
        }
    })
});