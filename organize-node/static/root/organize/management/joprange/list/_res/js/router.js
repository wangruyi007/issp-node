var app = angular.module('joprangeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.joprange.list",{
        url:"/list",
        views:{
            "content@root.organize.management.joprange":{
                templateUrl : "root/organize/management/joprange/list/_res/html/index.html",
                controller:'joprangeListCtrl'
            }
        }
    }).state("root.organize.management.joprange.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.joprange.list":{
                templateUrl : "root/organize/management/joprange/list/delete/_res/html/index.html",
                controller:'joprangeDeleteCtrl'
            }
        }
    }).state("root.organize.management.joprange.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.joprange.list":{
                templateUrl : "root/organize/management/joprange/list/congeal/_res/html/index.html",
                controller:'joprangeCongealCtrl'
            }
        }
    })
});