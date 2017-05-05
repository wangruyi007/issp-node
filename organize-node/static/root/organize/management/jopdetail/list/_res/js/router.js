var app = angular.module('jopdetailList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.jopdetail.list",{
        url:"/list",
        views:{
            "content@root.organize.management.jopdetail":{
                templateUrl : "root/organize/management/jopdetail/list/_res/html/index.html",
                controller:'jopdetailListCtrl'
            }
        }
    }).state("root.organize.management.jopdetail.list.delete[12]",{
        url:"/delete[12]",
        views:{
            "modal@root.organize.management.jopdetail.list":{
                templateUrl : "root/organize/management/jopdetail/list/delete/_res/html/index.html",
                controller:'jopdetailDeleteCtrl'
            }
        }
    }).state("root.organize.management.jopdetail.list.congeal[12]",{
        url:"/congeal[12]",
        views:{
            "modal@root.organize.management.jopdetail.list":{
                templateUrl : "root/organize/management/jopdetail/list/congeal/_res/html/index.html",
                controller:'jopdetailCongealCtrl'
            }
        }
    })
});