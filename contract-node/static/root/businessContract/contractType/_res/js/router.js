var app = angular.module('contractType', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.contractType", {
        url : "/contractType",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/contractType/_res/html/index.html",
                controller:"contractTypeCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/contractType/_res/html/menu.html",
                controller:"contractTypeMenuCtrl"
            }
        }
    }).state("root.businessContract.contractType.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.contractType":{
                templateUrl : "root/businessContract/contractType/add/_res/html/index.html",
                controller:'contractTypeAddCtrl'
            }
        }
    }).state("root.businessContract.contractType.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessContract.contractType":{
                templateUrl : "root/businessContract/contractType/edit/_res/html/index.html",
                controller:'contractTypeEditCtrl'
            }
        }
    })
});