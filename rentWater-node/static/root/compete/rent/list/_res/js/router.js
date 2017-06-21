var app = angular.module('rentList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.rent.list",{
        url:"/list",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/list/_res/html/index.html",
                controller:'rentListCtrl'
            }
        }
    }).state("root.compete.rent.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.rent.list":{
                templateUrl : "root/compete/rent/list/delete/_res/html/index.html",
                controller:'rentDeleteCtrl'
            }
        }
    })
});