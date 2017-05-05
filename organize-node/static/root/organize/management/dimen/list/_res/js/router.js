var app = angular.module('dimenList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.dimen.list",{
        url:"/list",
        views:{
            "content@root.organize.management.dimen":{
                templateUrl : "root/organize/management/dimen/list/_res/html/index.html",
                controller:'dimenListCtrl'
            }
        }
    }).state("root.organize.management.dimen.list.delete[12]",{
        url:"/delete[12]",
        views:{
            "modal@root.organize.management.dimen.list":{
                templateUrl : "root/organize/management/dimen/list/delete/_res/html/index.html",
                controller:'dimenDeleteCtrl'
            }
        }
    }).state("root.organize.management.dimen.list.congeal[12]",{
        url:"/congeal[12]",
        views:{
            "modal@root.organize.management.dimen.list":{
                templateUrl : "root/organize/management/dimen/list/congeal/_res/html/index.html",
                controller:'dimenCongealCtrl'
            }
        }
    })
});