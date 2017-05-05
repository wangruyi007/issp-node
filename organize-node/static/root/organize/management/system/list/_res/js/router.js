var app = angular.module('systemList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.system.list",{
        url:"/list",
        views:{
            "content@root.organize.management.system":{
                templateUrl : "root/organize/management/system/list/_res/html/index.html",
                controller:'systemListCtrl'
            }
        }
    }).state("root.organize.management.system.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.system.list":{
                templateUrl : "root/organize/management/system/list/delete/_res/html/index.html",
                controller:'systemDeleteCtrl'
            }
        }
    }).state("root.organize.management.system.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.system.list":{
                templateUrl : "root/organize/management/system/list/congeal/_res/html/index.html",
                controller:'systemCongealCtrl'
            }
        }
    })
});