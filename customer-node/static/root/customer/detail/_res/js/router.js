var app = angular.module('detail', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.detail", {
        url : "/detail",
        views : {
            "content@root.customer" : {
                templateUrl : "root/customer/detail/_res/html/index.html",
                controller:"detailCtrl"
            },"menu@root.customer" : {
                templateUrl : "root/customer/detail/_res/html/menu.html",
                controller:"detailMenuCtrl"
            }
        }
    }).state("root.customer.detail.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.customer.detail":{
                templateUrl : "root/customer/detail/add/_res/html/index.html",
                controller:'detailAddCtrl'
            }
        }
    }).state("root.customer.detail.edit[12]", {
        url : "/edit[12]?cusNum=",
        views : {
            "content@root.customer.detail" : {
                templateUrl : "root/customer/detail/edit/_res/html/index.html",
                controller:"detailEditCtrl"
            }
        }
    }).state("root.customer.detail.toview[12]", {
        url : "/toview[12]?cusNum=",
        views : {
            "content@root.customer.detail" : {
                templateUrl : "root/customer/detail/toview/_res/html/index.html",
                controller:"detailToviewCtrl"
            }
        }
    })
});