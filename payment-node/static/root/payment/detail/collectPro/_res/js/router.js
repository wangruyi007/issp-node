var app = angular.module('detailCollectPro', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.detail.collectPro",{
        url:"/collectPro",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/collectPro/_res/html/index.html",
                controller:'detailCollectProCtrl'
            }
        }
    }).state("root.payment.detail.collectPro.collectProMore[12]",{
        url:"/collectProMore[12]?suId=",
        views:{
            "modal@root.payment.detail.collectPro":{
                templateUrl : "root/payment/detail/collectPro/collectProMore/_res/html/index.html",
                controller:'detailCollectProMoreCtrl'
            }
        }
    })
});
