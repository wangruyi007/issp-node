var app = angular.module('companycap', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.companycap", {
        url : "/companycap",
        views : {
            "content@root.ability" : {
                templateUrl : "root/ability/companycap/_res/html/index.html",
                controller:"companycapCtrl"
            },"menu@root.ability" : {
                templateUrl : "root/ability/companycap/_res/html/menu.html",
                controller:"companycapMenuCtrl"
            }
        }
    }).state("root.ability.companycap.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/add/_res/html/index.html",
                controller:'companyAddCtrl'
            }
        }
    }).state("root.ability.companycap.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.ability.companycap":{
                templateUrl : "root/ability/companycap/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    })
});