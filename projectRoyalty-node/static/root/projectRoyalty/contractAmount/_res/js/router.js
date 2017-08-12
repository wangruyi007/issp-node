var app = angular.module('amount', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectRoyalty.contractAmount", {
        url : "/contractAmount",
        views : {
            "content@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/contractAmount/_res/html/index.html",
                controller:"amountCtrl"
            },"menu@root.projectRoyalty" : {
                templateUrl : "root/projectRoyalty/contractAmount/_res/html/menu.html",
                controller:"amountMenuCtrl"
            }
        }
    }).state("root.projectRoyalty.contractAmount.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectRoyalty.contractAmount":{
                templateUrl : "root/projectRoyalty/contractAmount/list/_res/html/index.html",
                controller:'amountListCtrl'
            }
        }
    }).state("root.projectRoyalty.contractAmount.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectRoyalty.contractAmount":{
                templateUrl : "root/projectRoyalty/contractAmount/add/_res/html/index.html",
                controller:'amountAddCtrl'
            }
        }
    }).state("root.projectRoyalty.contractAmount.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectRoyalty.contractAmount":{
                templateUrl : "root/projectRoyalty/contractAmount/edit/_res/html/index.html",
                controller:'amountEditCtrl'
            }
        }
    })
});