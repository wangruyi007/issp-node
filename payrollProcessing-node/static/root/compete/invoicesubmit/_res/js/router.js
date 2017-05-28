var app = angular.module('invoicesubmit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.invoicesubmit", {
        url : "/invoicesubmit",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/invoicesubmit/_res/html/index.html",
                controller:"invoicesubmitCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/invoicesubmit/_res/html/menu.html",
                controller:"invoicesubmitMenuCtrl"
            }
        }
    }).state("root.compete.invoicesubmit.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.invoicesubmit":{
                templateUrl : "root/compete/invoicesubmit/add/_res/html/index.html",
                controller:'invoicesubmitAddCtrl'
            }
        }
    }).state("root.compete.invoicesubmit.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.invoicesubmit":{
                templateUrl : "root/compete/invoicesubmit/edit/_res/html/index.html",
                controller:'invoicesubmitEditCtrl'
            }
        }
    })
});