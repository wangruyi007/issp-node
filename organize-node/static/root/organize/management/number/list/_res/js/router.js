var app = angular.module('numberList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.number.list",{
        url:"/list",
        views:{
            "content@root.organize.management.number":{
                templateUrl : "root/organize/management/number/list/_res/html/index.html",
                controller:'numberListCtrl'
            }
        }
    }).state("root.organize.management.number.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.number.list":{
                templateUrl : "root/organize/management/number/list/delete/_res/html/index.html",
                controller:'numberDeleteCtrl'
            }
        }
    })
});