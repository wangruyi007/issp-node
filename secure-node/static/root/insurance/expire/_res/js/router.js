var app = angular.module('expire', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.expire", {
        url : "/expire",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/expire/_res/html/index.html",
                controller:"expireCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/expire/_res/html/menu.html",
                controller:"expireMenuCtrl"
            }
        }
    }).state("root.insurance.expire.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.expire":{
                templateUrl : "root/insurance/expire/list/_res/html/index.html",
                controller:'expireListCtrl'
            }
        }
    }).state("root.insurance.expire.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.expire":{
                templateUrl : "root/insurance/expire/edit/_res/html/index.html",
                controller:'expireEditCtrl'
            }
        }
    })
});