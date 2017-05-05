var app = angular.module('jopdesList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.jopdes.list",{
        url:"/list",
        views:{
            "content@root.organize.management.jopdes":{
                templateUrl : "root/organize/management/jopdes/list/_res/html/index.html",
                controller:'jopdesListCtrl'
            }
        }
    }).state("root.organize.management.jopdes.list.delete[12]",{
        url:"/delete[12]",
        views:{
            "modal@root.organize.management.jopdes.list":{
                templateUrl : "root/organize/management/jopdes/list/delete/_res/html/index.html",
                controller:'jopdesDeleteCtrl'
            }
        }
    }).state("root.organize.management.jopdes.list.congeal[12]",{
        url:"/congeal[12]",
        views:{
            "modal@root.organize.management.jopdes.list":{
                templateUrl : "root/organize/management/jopdes/list/congeal/_res/html/index.html",
                controller:'jopdesCongealCtrl'
            }
        }
    })
});