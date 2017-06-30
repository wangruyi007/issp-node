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
    }).state("root.businessContract.contractType.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.businessContract.contractType":{
                templateUrl : "root/businessContract/contractType/list/_res/html/index.html",
                controller:'contractListCtrl'
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
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.businessContract.contractType":{
                templateUrl : "root/businessContract/contractType/edit/_res/html/index.html",
                controller:'contractTypeEditCtrl'
            }
        }
    }).state("root.businessContract.contractType.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.businessContract.contractType":{
                templateUrl : "root/businessContract/contractType/upload/_res/html/index.html",
                controller:'typeUploadCtrl'
            }
        }
    }).state("root.businessContract.contractType.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.businessContract.contractType":{
                templateUrl : "root/businessContract/contractType/view/_res/html/index.html",
                controller:'typeViewCtrl'
            }
        }
    })
});