var app = angular.module('detailGeneral', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.detail.general",{
        url:"/general",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/general/_res/html/index.html",
                controller:'detailGeneralCtrl'
            }
        }
    }).state("root.payment.detail.general.generalMore[12]",{
        url:"/generalMore[12]?suId=",
        views:{
            "modal@root.payment.detail.general":{
                templateUrl : "root/payment/detail/general/generalMore/_res/html/index.html",
                controller:'detailGeneralMoreCtrl'
            }
        }
    })
});
