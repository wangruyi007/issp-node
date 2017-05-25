var app = angular.module('recordList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.record.list",{
        url:"/list",
        views:{
            "content@root.compete.record":{
                templateUrl : "root/compete/record/list/_res/html/index.html",
                controller:'recordListCtrl'
            }
        }
    }).state("root.compete.record.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.record.list":{
                templateUrl : "root/compete/record/list/delete/_res/html/index.html",
                controller:'recordDeleteCtrl'
            }
        }
    })
});