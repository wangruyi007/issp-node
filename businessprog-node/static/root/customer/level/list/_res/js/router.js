var app = angular.module('levelList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.level.list",{
        url:"/list",
        views:{
            "content@root.customer.level":{
                templateUrl : "root/customer/level/list/_res/html/index.html",
                controller:'levelListCtrl'
            }
        }
    }).state("root.customer.level.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.customer.level.list":{
                templateUrl : "root/customer/level/list/delete/_res/html/index.html",
                controller:'levelDeleteCtrl'
            }
        }
    })
});