var app = angular.module('voucherAudit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.voucherAudit", {
        url : "/voucherAudit",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherAudit/_res/html/index.html",
                controller:"voucherAuditCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherAudit/_res/html/menu.html",
                controller:"voucherAuditMenuCtrl"
            }
        }
    }).state("root.recordAccount.voucherAudit.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.recordAccount.voucherAudit":{
                templateUrl : "root/recordAccount/voucherAudit/edit/_res/html/index.html",
                controller:'voucherAuditEditCtrl'
            }
        }
    })
});