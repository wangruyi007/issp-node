var app = angular.module('invoicesubmitList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.invoicesubmit.list",{
        url:"/list",
        views:{
            "content@root.compete.invoicesubmit":{
                templateUrl : "root/compete/invoicesubmit/list/_res/html/index.html",
                controller:'invoicesubmitListCtrl'
            }
        }
    }).state("root.compete.invoicesubmit.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.invoicesubmit.list":{
                templateUrl : "root/compete/invoicesubmit/list/delete/_res/html/index.html",
                controller:'invoicesubmitDeleteCtrl'
            }
        }
    })
});