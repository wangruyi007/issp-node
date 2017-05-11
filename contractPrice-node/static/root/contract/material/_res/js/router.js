var app = angular.module('material', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.material", {
        url : "/material",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/material/_res/html/index.html",
                controller:"materialCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/material/_res/html/menu.html",
                controller:"materialMenuCtrl"
            }
        }
    }).state("root.contract.material.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.material":{
                templateUrl : "root/contract/material/add/_res/html/index.html",
                controller:'materialAddCtrl'
            }
        }
    }).state("root.contract.material.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.contract.material":{
                templateUrl : "root/contract/material/edit/_res/html/index.html",
                controller:'materialEditCtrl'
            }
        }
    }).state("root.contract.material.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.contract.material":{
                templateUrl : "root/contract/material/collect/_res/html/index.html",
                controller:'materialCollectCtrl'
            }
        }
    })
});