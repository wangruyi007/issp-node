var app = angular.module('waterList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.water.list",{
        url:"/list",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/list/_res/html/index.html",
                controller:'waterListCtrl'
            }
        }
    }).state("root.compete.water.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.water.list":{
                templateUrl : "root/compete/water/list/delete/_res/html/index.html",
                controller:'waterDeleteCtrl'
            }
        }
    })
});