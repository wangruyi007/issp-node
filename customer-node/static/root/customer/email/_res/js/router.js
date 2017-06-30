var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.customer.email", {
        url : "/email",
        views : {
            "content@root.customer" : {
                templateUrl : "root/customer/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.customer" : {
                templateUrl : "root/customer/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.customer.email.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.customer.email":{
                templateUrl : "root/customer/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.customer.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.customer.email":{
                templateUrl : "root/customer/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.customer.email.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.customer.email":{
                templateUrl : "root/customer/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    }).state("root.customer.email.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.customer.email":{
                templateUrl : "root/customer/email/summary/_res/html/index.html",
                controller:'emailSummaryCtrl'
            }
        }
    })
});