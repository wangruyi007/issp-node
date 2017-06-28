var app = angular.module('basicinfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.basicinfo", {
        url : "/basicinfo",
        views : {
            "content@root.customer" : {
                templateUrl : "root/customer/basicinfo/_res/html/index.html",
                controller:"basicinfoCtrl"
            },"menu@root.customer" : {
                templateUrl : "root/customer/basicinfo/_res/html/menu.html",
                controller:"basicinfoMenuCtrl"
            }
        }
    }).state("root.customer.basicinfo.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.customer.basicinfo":{
                templateUrl : "root/customer/basicinfo/list/_res/html/index.html",
                controller:'basicinfoListCtrl'
            }
        }
    }).state("root.customer.basicinfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.customer.basicinfo":{
                templateUrl : "root/customer/basicinfo/add/_res/html/index.html",
                controller:'basicinfoAddCtrl'
            }
        }
    }).state("root.customer.basicinfo.edit[12]",{
        url:"/edit[12]?cusNum=",
        views:{
            "content@root.customer.basicinfo":{
                templateUrl : "root/customer/basicinfo/edit/_res/html/index.html",
                controller:'basicinfoEditCtrl'
            }
        }
    })
});