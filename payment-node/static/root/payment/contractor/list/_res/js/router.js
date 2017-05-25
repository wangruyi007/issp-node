var app = angular.module('contractorList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.contractor.list",{
        url:"/list",
        views:{
            "content@root.payment.contractor":{
                templateUrl : "root/payment/contractor/list/_res/html/index.html",
                controller:'contractorListCtrl'
            }
        }
    }).state("root.payment.contractor.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.payment.contractor.list":{
                templateUrl : "root/payment/contractor/list/delete/_res/html/index.html",
                controller:'contractorDeleteCtrl'
            }
        }
     })
});