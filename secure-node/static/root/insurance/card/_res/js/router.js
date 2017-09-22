var app = angular.module('card', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.card", {
        url : "/card",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/card/_res/html/index.html",
                controller:"cardCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/card/_res/html/menu.html",
                controller:"cardMenuCtrl"
            }
        }
    }).state("root.insurance.card.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.card":{
                templateUrl : "root/insurance/card/list/_res/html/index.html",
                controller:'cardListCtrl'
            }
        }
    }).state("root.insurance.card.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.insurance.card":{
                templateUrl : "root/insurance/card/add/_res/html/index.html",
                controller:'cardAddCtrl'
            }
        }
    }).state("root.insurance.card.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.card":{
                templateUrl : "root/insurance/card/edit/_res/html/index.html",
                controller:'cardEditCtrl'
            }
        }
    })
});