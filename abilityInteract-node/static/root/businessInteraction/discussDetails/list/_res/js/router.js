var app = angular.module('discussList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.discussDetails.list",{
        url:"/list",
        views:{
            "content@root.businessInteraction.discussDetails":{
                templateUrl : "root/businessInteraction/discussDetails/list/_res/html/index.html",
                controller:'discussListCtrl'
            }
        }
    }).state("root.businessInteraction.discussDetails.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessInteraction.discussDetails.list":{
                templateUrl : "root/businessInteraction/discussDetails/list/delete/_res/html/index.html",
                controller:'discussDeleteCtrl'
            }
        }
     })
});