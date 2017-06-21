var app = angular.module('detailList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.detail.list",{
        url:"/list",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/list/_res/html/index.html",
                controller:'detailListCtrl'
            }
        }
    }).state("root.payment.detail.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.payment.detail.list":{
                templateUrl : "root/payment/detail/list/delete/_res/html/index.html",
                controller:'detailDeleteCtrl'
            }
        }
     })
});