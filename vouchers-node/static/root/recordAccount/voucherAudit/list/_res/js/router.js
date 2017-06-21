var app = angular.module('voucherAuditList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.voucherAudit.list",{
        url:"/list",
        views:{
            "content@root.recordAccount.voucherAudit":{
                templateUrl : "root/recordAccount/voucherAudit/list/_res/html/index.html",
                controller:'voucherAuditListCtrl'
            }
        }
    }).state("root.recordAccount.voucherAudit.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.recordAccount.voucherAudit.list":{
                templateUrl : "root/recordAccount/voucherAudit/list/delete/_res/html/index.html",
                controller:'deleteCtrl'
            }
        }
     }).state("root.recordAccount.voucherAudit.list.review[12]",{
        url:"/review[12]?id=",
        views:{
            "modal@root.recordAccount.voucherAudit.list":{
                templateUrl : "root/recordAccount/voucherAudit/list/review/_res/html/index.html",
                controller:'reviewCtrl'
            }
        }
     })
});