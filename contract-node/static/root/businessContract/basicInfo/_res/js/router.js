var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/basicInfo/_res/html/menu.html",
                controller:"basicMenuCtrl"
            }
        }
    }).state("root.businessContract.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/add/_res/html/index.html",
                controller:'basicAddCtrl'
            }
        }
    }).state("root.businessContract.basicInfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessContract.basicInfo":{
                templateUrl : "root/businessContract/basicInfo/edit/_res/html/index.html",
                controller:'basicEditCtrl'
            }
        }
    })
});