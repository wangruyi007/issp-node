var app = angular.module('level', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.level", {
        url : "/level",
        views : {
            "content@root.customer" : {
                templateUrl : "root/customer/level/_res/html/index.html",
                controller:"levelCtrl"
            },"menu@root.customer" : {
                templateUrl : "root/customer/level/_res/html/menu.html",
                controller:"levelMenuCtrl"
            }
        }
    }).state("root.customer.level.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.customer.level":{
                templateUrl : "root/customer/level/list/_res/html/index.html",
                controller:'levelListCtrl'
            }
        }
    }).state("root.customer.level.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.customer.level":{
                templateUrl : "root/customer/level/add/_res/html/index.html",
                controller:'levelAddCtrl'
            }
        }
    }).state("root.customer.level.edit[12]",{
        url:"/edit[12]?nameLevel=",
        views:{
            "content@root.customer.level":{
                templateUrl : "root/customer/level/edit/_res/html/index.html",
                controller:'levelEditCtrl'
            }
        }
    })
});