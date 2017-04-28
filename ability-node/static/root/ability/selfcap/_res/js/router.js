var app = angular.module('selfcap', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.selfcap", {
        url : "/selfcap",
        views : {
            "content@root.ability" : {
                templateUrl : "root/ability/selfcap/_res/html/index.html",
                controller:"selfcapCtrl"
            },"menu@root.ability" : {
                templateUrl : "root/ability/selfcap/_res/html/menu.html",
                controller:"selfcapMenuCtrl"
            }
        }
    }).state("root.ability.selfcap.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/add/_res/html/index.html",
                controller:'selfcapAddCtrl'
            }
        }
    }).state("root.ability.selfcap.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/edit/_res/html/index.html",
                controller:'selfcapEditCtrl'
            }
        }
    }).state("root.ability.selfcap.pedit[12]",{
        url:"/pedit[12]?id=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/pedit/_res/html/index.html",
                controller:'selfcapPEditCtrl'
            }
        }
    }).state("root.ability.selfcap.perlist[12]",{
        url:"/perlist[12]?id=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/perlist/_res/html/index.html",
                controller:'selfcapListCtrl2'
            }
        }
    }).state("root.ability.selfcap.social[12]",{
        url:"/social[12]?id=",
        views:{
            "content@root.ability.selfcap":{
                templateUrl : "root/ability/selfcap/social/_res/html/index.html",
                controller:'socialPAddCtrl'
            }
        }
    })
});