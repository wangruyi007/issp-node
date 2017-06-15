var app = angular.module('bonus', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.bonus", {
        url : "/bonus",
        views : {
            "content@root.projectBonus" : {
                templateUrl : "root/projectBonus/bonus/_res/html/index.html",
                controller:"bonusCtrl"
            },"menu@root.projectBonus" : {
                templateUrl : "root/projectBonus/bonus/_res/html/menu.html",
                controller:"bonusMenuCtrl"
            }
        }
    }).state("root.projectBonus.bonus.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectBonus.bonus":{
                templateUrl : "root/projectBonus/bonus/add/_res/html/index.html",
                controller:'bonusAddCtrl'
            }
        }
    }).state("root.projectBonus.bonus.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.projectBonus.bonus":{
                templateUrl : "root/projectBonus/bonus/edit/_res/html/index.html",
                controller:'bonusEditCtrl'
            }
        }
    })
});