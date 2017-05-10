var app = angular.module('userjopList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.userjop.list",{
        url:"/list",
        views:{
            "content@root.organize.management.userjop":{
                templateUrl : "root/organize/management/userjop/list/_res/html/index.html",
                controller:'userjopListCtrl'
            }
        }
    }).state("root.organize.management.userjop.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.userjop.list":{
                templateUrl : "root/organize/management/userjop/list/delete/_res/html/index.html",
                controller:'userjopDeleteCtrl'
            }
        }
    }).state("root.organize.management.userjop.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.userjop.list":{
                templateUrl : "root/organize/management/userjop/list/congeal/_res/html/index.html",
                controller:'userjopCongealCtrl'
            }
        }
    })
});