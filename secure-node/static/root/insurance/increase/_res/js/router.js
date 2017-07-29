var app = angular.module('increase', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.increase", {
        url : "/increase",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/increase/_res/html/index.html",
                controller:"increCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/increase/_res/html/menu.html",
                controller:"increMenuCtrl"
            }
        }
    }).state("root.insurance.increase.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.increase":{
                templateUrl : "root/insurance/increase/list/_res/html/index.html",
                controller:'increListCtrl'
            }
        }
    }).state("root.insurance.increase.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.insurance.increase":{
                templateUrl : "root/insurance/increase/add/_res/html/index.html",
                controller:'increAddCtrl'
            }
        }
    }).state("root.insurance.increase.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.increase":{
                templateUrl : "root/insurance/increase/edit/_res/html/index.html",
                controller:'increEditCtrl'
            }
        }
    }).state("root.insurance.increase.business[12]",{
        url:"/business[12]?id=&page=",
        views:{
            "content@root.insurance.increase":{
                templateUrl : "root/insurance/increase/business/_res/html/index.html",
                controller:'increBusinessCtrl'
            }
        }
    })
});