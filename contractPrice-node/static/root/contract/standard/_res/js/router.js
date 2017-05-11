var app = angular.module('standard', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.standard", {
        url : "/standard",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/standard/_res/html/index.html",
                controller:"standardCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/standard/_res/html/menu.html",
                controller:"standardMenuCtrl"
            }
        }
    }).state("root.contract.standard.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.standard":{
                templateUrl : "root/contract/standard/add/_res/html/index.html",
                controller:'standardAddCtrl'
            }
        }
    }).state("root.contract.standard.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.contract.standard":{
                templateUrl : "root/contract/standard/edit/_res/html/index.html",
                controller:'standardEditCtrl'
            }
        }
    }).state("root.contract.standard.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.contract.standard":{
                templateUrl : "root/contract/standard/collect/_res/html/index.html",
                controller:'standardCollectCtrl'
            }
        }
    })
});