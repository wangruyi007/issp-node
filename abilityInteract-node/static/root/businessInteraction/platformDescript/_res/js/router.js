var app = angular.module('platformDescript', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.platformDescript", {
        url : "/platformDescript",
        views : {
            "content@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/platformDescript/_res/html/index.html",
                controller:"descriptCtrl"
            },"menu@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/platformDescript/_res/html/menu.html",
                controller:"descriptMenuCtrl"
            }
        }
    }).state("root.businessInteraction.platformDescript.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessInteraction.platformDescript":{
                templateUrl : "root/businessInteraction/platformDescript/add/_res/html/index.html",
                controller:'descriptAddCtrl'
            }
        }
    }).state("root.businessInteraction.platformDescript.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessInteraction.platformDescript":{
                templateUrl : "root/businessInteraction/platformDescript/edit/_res/html/index.html",
                controller:'descriptEditCtrl'
            }
        }
    })
});