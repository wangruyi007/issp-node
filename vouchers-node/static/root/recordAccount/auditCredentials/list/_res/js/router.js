var app = angular.module('voucherAuditList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.auditCredentials.list",{
        url:"/list",
        views:{
            "content@root.recordAccount.auditCredentials":{
                templateUrl : "root/recordAccount/auditCredentials/list/_res/html/index.html",
                controller:'auditCredentialsListCtrl'
            }
        }
    }).state("root.recordAccount.auditCredentials.list.posting[12]",{
        url:"/posting[12]?ids=",
        views:{
            "modal@root.recordAccount.auditCredentials.list":{
                templateUrl : "root/recordAccount/auditCredentials/list/posting/_res/html/index.html",
                controller:'postingCtrl'
            }
        }
     }).state("root.recordAccount.auditCredentials.list.anti[12]",{
        url:"/anti[12]?id=",
        views:{
            "modal@root.recordAccount.auditCredentials.list":{
                templateUrl : "root/recordAccount/auditCredentials/list/anti/_res/html/index.html",
                controller:'antiCtrl'
            }
        }
     })
});