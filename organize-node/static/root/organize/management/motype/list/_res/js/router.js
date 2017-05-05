var app = angular.module('motypeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.motype.list",{
        url:"/list",
        views:{
            "content@root.organize.management.motype":{
                templateUrl : "root/organize/management/motype/list/_res/html/index.html",
                controller:'motypeListCtrl'
            }
        }
    }).state("root.organize.management.motype.list.delete[12]",{
        url:"/delete[12]",
        views:{
            "modal@root.organize.management.motype.list":{
                templateUrl : "root/organize/management/motype/list/delete/_res/html/index.html",
                controller:'motypeDeleteCtrl'
            }
        }
    }).state("root.organize.management.motype.list.congeal[12]",{
        url:"/congeal[12]",
        views:{
            "modal@root.organize.management.motype.list":{
                templateUrl : "root/organize/management/motype/list/congeal/_res/html/index.html",
                controller:'motypeCongealCtrl'
            }
        }
    })
});