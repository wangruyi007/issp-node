var app = angular.module('basicinfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.basicinfo.list",{
        url:"/list",
        views:{
            "content@root.customer.basicinfo":{
                templateUrl : "root/customer/basicinfo/list/_res/html/index.html",
                controller:'basicinfoListCtrl'
            }
        }
    }).state("root.customer.basicinfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.customer.basicinfo.list":{
                templateUrl : "root/customer/basicinfo/list/delete/_res/html/index.html",
                controller:'basicinfoDeleteCtrl'
            }
        }
    }).state("root.customer.basicinfo.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.customer.basicinfo.list":{
                templateUrl : "root/customer/basicinfo/list/congeal/_res/html/index.html",
                controller:'basicinfoCongealCtrl'
            }
        }
    })
});