var app = angular.module('billRecordsList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.billRecords.list",{
        url:"/list",
        views:{
            "content@root.recordAccount.billRecords":{
                templateUrl : "root/recordAccount/billRecords/list/_res/html/index.html",
                controller:'billRecordsListCtrl'
            }
        }
    })
});