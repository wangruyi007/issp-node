var app = angular.module('levelList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.email.list",{
        url:"/list",
        views:{
            "content@root.customer.email":{
                templateUrl : "root/customer/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.customer.email.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.customer.email.list":{
                templateUrl : "root/customer/email/list/delete/_res/html/index.html",
                controller:'emailDeleteCtrl'
            }
        }
    }).state("root.customer.email.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.customer.email.list":{
                templateUrl : "root/customer/email/list/congeal/_res/html/index.html",
                controller:'emailCongealCtrl'
            }
        }
    })
});