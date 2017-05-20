var app = angular.module('voucherGenerationList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.voucherGeneration.list",{
        url:"/list",
        views:{
            "content@root.recordAccount.voucherGeneration":{
                templateUrl : "root/recordAccount/voucherGeneration/list/_res/html/index.html",
                controller:'voucherListCtrl'
            }
        }
    }).state("root.recordAccount.voucherGeneration.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.recordAccount.voucherGeneration.list":{
                templateUrl : "root/recordAccount/voucherGeneration/list/delete/_res/html/index.html",
                controller:'deleteCtrl'
            }
        }
     })
});