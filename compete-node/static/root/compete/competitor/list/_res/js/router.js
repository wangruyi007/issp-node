var app = angular.module('competitorList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.competitor.list",{
        url:"/list",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/list/_res/html/index.html",
                controller:'competitorListCtrl'
            }
        }
    }).state("root.compete.competitor.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.competitor.list":{
                templateUrl : "root/compete/competitor/list/delete/_res/html/index.html",
                controller:'competitorDeleteCtrl'
            }
        }
    })
});