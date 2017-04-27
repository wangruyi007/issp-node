var app = angular.module('descriptList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.platformDescript.list",{
        url:"/list",
        views:{
            "content@root.businessInteraction.platformDescript":{
                templateUrl : "root/businessInteraction/platformDescript/list/_res/html/index.html",
                controller:'descriptListCtrl'
            }
        }
    }).state("root.businessInteraction.platformDescript.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessInteraction.platformDescript.list":{
                templateUrl : "root/businessInteraction/platformDescript/list/delete/_res/html/index.html",
                controller:'descriptDeleteCtrl'
            }
        }
     })
});