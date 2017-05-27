var app = angular.module('informationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketinform.information.list",{
        url:"/list",
        views:{
            "content@root.marketinform.information":{
                templateUrl : "root/marketinform/information/list/_res/html/index.html",
                controller:'informationListCtrl'
            }
        }
    }).state("root.marketinform.information.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.marketinform.information.list":{
                templateUrl : "root/marketinform/information/list/delete/_res/html/index.html",
                controller:'informationDeleteCtrl'
            }
        }
    })
});