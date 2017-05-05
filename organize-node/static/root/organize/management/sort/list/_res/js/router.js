var app = angular.module('sortList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.sort.list",{
        url:"/list",
        views:{
            "content@root.organize.management.sort":{
                templateUrl : "root/organize/management/sort/list/_res/html/index.html",
                controller:'sortListCtrl'
            }
        }
    }).state("root.organize.management.sort.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.sort.list":{
                templateUrl : "root/organize/management/sort/list/delete/_res/html/index.html",
                controller:'sortDeleteCtrl'
            }
        }
    }).state("root.organize.management.sort.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.sort.list":{
                templateUrl : "root/organize/management/sort/list/congeal/_res/html/index.html",
                controller:'sortCongealCtrl'
            }
        }
    })
});