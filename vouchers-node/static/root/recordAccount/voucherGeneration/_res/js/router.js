var app = angular.module('voucherGeneration', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.voucherGeneration", {
        url : "/voucherGeneration",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherGeneration/_res/html/index.html",
                controller:"voucherGenerationCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherGeneration/_res/html/menu.html",
                controller:"voucherMenuCtrl"
            }
        }
    }).state("root.recordAccount.voucherGeneration.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.recordAccount.voucherGeneration":{
                templateUrl : "root/recordAccount/voucherGeneration/add/_res/html/index.html",
                controller:'voucherGenerationAddCtrl'
            }
        }
    }).state("root.recordAccount.voucherGeneration.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.recordAccount.voucherGeneration":{
                templateUrl : "root/recordAccount/voucherGeneration/edit/_res/html/index.html",
                controller:'voucherGenerationEditCtrl'
            }
        }
    })
});