var app = angular.module('reflectList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.reflect.list",{
        url:"/list",
        views:{
            "content@root.organize.management.reflect":{
                templateUrl : "root/organize/management/reflect/list/_res/html/index.html",
                controller:'reflectListCtrl'
            }
        }
    }).state("root.organize.management.reflect.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.reflect.list":{
                templateUrl : "root/organize/management/reflect/list/delete/_res/html/index.html",
                controller:'reflectDeleteCtrl'
            }
        }
    }).state("root.organize.management.reflect.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.reflect.list":{
                templateUrl : "root/organize/management/reflect/list/congeal/_res/html/index.html",
                controller:'reflectCongealCtrl'
            }
        }
    })
});