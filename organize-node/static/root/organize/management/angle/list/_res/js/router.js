var app = angular.module('angleList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.angle.list",{
        url:"/list",
        views:{
            "content@root.organize.management.angle":{
                templateUrl : "root/organize/management/angle/list/_res/html/index.html",
                controller:'angleListCtrl'
            }
        }
    }).state("root.organize.management.angle.list.delete[12]",{
        url:"/delete[12]",
        views:{
            "modal@root.organize.management.angle.list":{
                templateUrl : "root/organize/management/angle/list/delete/_res/html/index.html",
                controller:'angleDeleteCtrl'
            }
        }
    }).state("root.organize.management.angle.list.congeal[12]",{
        url:"/congeal[12]",
        views:{
            "modal@root.organize.management.angle.list":{
                templateUrl : "root/organize/management/angle/list/congeal/_res/html/index.html",
                controller:'angleCongealCtrl'
            }
        }
    })
});