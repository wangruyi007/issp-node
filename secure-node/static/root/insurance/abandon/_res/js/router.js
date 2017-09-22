var app = angular.module('abandon', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.abandon", {
        url : "/abandon",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/abandon/_res/html/index.html",
                controller:"abandCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/abandon/_res/html/menu.html",
                controller:"abandMenuCtrl"
            }
        }
    }).state("root.insurance.abandon.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.abandon":{
                templateUrl : "root/insurance/abandon/list/_res/html/index.html",
                controller:'abandListCtrl'
            }
        }
    }).state("root.insurance.abandon.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.insurance.abandon":{
                templateUrl : "root/insurance/abandon/add/_res/html/index.html",
                controller:'abandAddCtrl'
            }
        }
    }).state("root.insurance.abandon.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.abandon":{
                templateUrl : "root/insurance/abandon/edit/_res/html/index.html",
                controller:'abandEditCtrl'
            }
        }
    })
});