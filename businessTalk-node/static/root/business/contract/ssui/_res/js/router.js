var app = angular.module('ssui', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.business.contract.ssui", {
        url : "/ssui",
        views : {// contract  
            "content@root.business.contract" : {
                templateUrl : "root/business/contract/ssui/_res/html/index.html",
                controller:"ssuiCtrl"
            },"menu@root.business.contract" : {
                templateUrl : "root/business/contract/ssui/_res/html/menu.html",
                controller:"ssuiMenuCtrl"
            }
        }
    }).state("root.business.contract.ssui.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/add/_res/html/index.html",
                controller:'ssuiAddCtrl'
            }
        }
    }).state("root.business.contract.ssui.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/edit/_res/html/index.html",
                controller:'ssuiEditCtrl'
            }
        }
    }).state("root.business.contract.ssui.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.business.contract.ssui":{
                templateUrl : "root/business/contract/ssui/collect/_res/html/index.html",
                controller:'ssuiCollectCtrl'
            }
        }
    })
});