var app = angular.module('detailList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.detail.list",{
        url:"/list",
        views:{
            "content@root.customer.detail":{
                templateUrl : "root/customer/detail/list/_res/html/index.html",
                controller:'detailListCtrl'
            }
        }
    }).state("root.customer.detail.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.customer.detail.list":{
                templateUrl : "root/customer/detail/list/delete/_res/html/index.html",
                controller:'detailDeleteCtrl'
            }
        }
    })
});