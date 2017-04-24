var app = angular.module('cooperation', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.cooperation", {
        url : "/cooperation",
        views : {
            "content@root.ability" : {
                templateUrl : "root/ability/cooperation/_res/html/index.html",
                controller:"cooperationCtrl"
            },"menu@root.ability" : {
                templateUrl : "root/ability/cooperation/_res/html/menu.html",
                controller:"cooperationMenuCtrl"
            }
        }
    }).state("root.ability.cooperation.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ability.cooperation":{
                templateUrl : "root/ability/cooperation/add/_res/html/index.html",
                controller:'cooperationAddCtrl'
            }
        }
    }).state("root.ability.cooperation.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.ability.cooperation":{
                templateUrl : "root/ability/cooperation/edit/_res/html/index.html",
                controller:'cooperationEditCtrl'
            }
        }
    }).state("root.ability.cooperation.pedit[12]",{
        url:"/pedit[12]?id=",
        views:{
            "content@root.ability.cooperation":{
                templateUrl : "root/ability/cooperation/pedit/_res/html/index.html",
                controller:'cooperationPEditCtrl'
            }
        }
    }).state("root.ability.cooperation.perlist[12]",{
        url:"/perlist[12]?id=",
        views:{
            "content@root.ability.cooperation":{
                templateUrl : "root/ability/cooperation/perlist/_res/html/index.html",
                controller:'cooperationAbiCtrl'
            }
        }
    })
});