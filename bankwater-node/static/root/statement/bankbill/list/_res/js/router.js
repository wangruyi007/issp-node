var app = angular.module('bankbillList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.statement.bankbill.list", {
        url : "/list",
        views : {
            "content@root.statement.bankbill" : {
                templateUrl : "root/statement/bankbill/list/_res/html/index.html",
                controller:"bankbillListCtrl"
            }
        }
    }).state("root.statement.bankbill.list.delete[12]", {
        url : "/delete[12]?id=",
        views : {
            "modal@root.statement.bankbill.list" : {
                templateUrl : "root/statement/bankbill/list/delete/_res/html/index.html",
                controller:"bankbillDelCtrl"
            }
        }
    })
});