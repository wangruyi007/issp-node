var app = angular.module('bankbill', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.statement.bankbill", {
        url : "/bankbill",
        views : {
            "content@root.statement" : {
                templateUrl : "root/statement/bankbill/_res/html/index.html",
                controller:"bankbillCtrl"
            },"menu@root.statement" : {
                templateUrl : "root/statement/bankbill/_res/html/menu.html",
                controller:"bankbillMenuCtrl"
            }
        }
    }).state("root.statement.bankbill.import[12]", {
        url : "/import[12]",
        views : {
            "content@root.statement.bankbill" : {
                templateUrl : "root/statement/bankbill/import/_res/html/index.html",
                controller:"bankbillImportCtrl"
            }
        }
    })
});