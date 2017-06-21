var app = angular.module('operationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.operation.list",{
        url:"/list",
        views:{
            "content@root.organize.management.operation":{
                templateUrl : "root/organize/management/operation/list/_res/html/index.html",
                controller:'operationListCtrl'
            }
        }
    }).state("root.organize.management.operation.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.operation.list":{
                templateUrl : "root/organize/management/operation/list/delete/_res/html/index.html",
                controller:'operationDeleteCtrl'
            }
        }
    }).state("root.organize.management.operation.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.operation.list":{
                templateUrl : "root/organize/management/operation/list/congeal/_res/html/index.html",
                controller:'operationCongealCtrl'
            }
        }
    })
});