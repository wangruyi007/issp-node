var app = angular.module('proportion', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.proportion", {
        url : "/proportion",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/proportion/_res/html/index.html",
                controller:"protionCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/proportion/_res/html/menu.html",
                controller:"protionMenuCtrl"
            }
        }
    }).state("root.insurance.proportion.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.proportion":{
                templateUrl : "root/insurance/proportion/list/_res/html/index.html",
                controller:'protionListCtrl'
            }
        }
    }).state("root.insurance.proportion.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.insurance.proportion":{
                templateUrl : "root/insurance/proportion/add/_res/html/index.html",
                controller:'protionAddCtrl'
            }
        }
    }).state("root.insurance.proportion.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.proportion":{
                templateUrl : "root/insurance/proportion/edit/_res/html/index.html",
                controller:'protionEditCtrl'
            }
        }
    })
});