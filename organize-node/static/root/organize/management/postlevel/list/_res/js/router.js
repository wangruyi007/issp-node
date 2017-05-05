var app = angular.module('postlevelList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.postlevel.list",{
        url:"/list",
        views:{
            "content@root.organize.management.postlevel":{
                templateUrl : "root/organize/management/postlevel/list/_res/html/index.html",
                controller:'postlevelListCtrl'
            }
        }
    }).state("root.organize.management.postlevel.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.postlevel.list":{
                templateUrl : "root/organize/management/postlevel/list/delete/_res/html/index.html",
                controller:'postlevelDeleteCtrl'
            }
        }
    })
});