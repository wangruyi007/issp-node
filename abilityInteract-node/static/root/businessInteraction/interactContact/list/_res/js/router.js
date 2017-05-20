var app = angular.module('interactList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.interactContact.list",{
        url:"/list",
        views:{
            "content@root.businessInteraction.interactContact":{
                templateUrl : "root/businessInteraction/interactContact/list/_res/html/index.html",
                controller:'interactListCtrl'
            }
        }
    }).state("root.businessInteraction.interactContact.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessInteraction.interactContact.list":{
                templateUrl : "root/businessInteraction/interactContact/list/delete/_res/html/index.html",
                controller:'interactDeleteCtrl'
            }
        }
     })
});