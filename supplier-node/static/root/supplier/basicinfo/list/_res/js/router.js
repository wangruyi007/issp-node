var app = angular.module('basicinfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.basicinfo.list",{
        url:"/list",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/list/_res/html/index.html",
                controller:'basicinfoListCtrl'
            }
        }
    }).state("root.supplier.basicinfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.supplier.basicinfo.list":{
                templateUrl : "root/supplier/basicinfo/list/delete/_res/html/index.html",
                controller:'basicinfoDeleteCtrl'
            }
        }
     })
});