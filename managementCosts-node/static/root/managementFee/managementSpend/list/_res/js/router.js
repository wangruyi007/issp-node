var app = angular.module('managementSpendList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.managementFee.managementSpend.list",{
        url:"/list",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/list/_res/html/index.html",
                controller:'spendListCtrl'
            }
        }
    }).state("root.managementFee.managementSpend.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.managementFee.managementSpend.list":{
                templateUrl : "root/managementFee/managementSpend/list/delete/_res/html/index.html",
                controller:'deleteCtrl'
            }
        }
     })
});