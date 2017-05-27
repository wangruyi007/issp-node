var app = angular.module('voucherRecordsList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.voucherRecords.list",{
        url:"/list",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/list/_res/html/index.html",
                controller:'voucherRecordsListCtrl'
            }
        }
    })
});