var app = angular.module('account', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.taxes.taxes.account", {
        url : "/account",
        views : {  
            "content@root.taxes.taxes" : {
                templateUrl : "root/taxes/taxes/account/_res/html/index.html",
                controller:"accountCtrl"
            },"menu@root.taxes.taxes" : {
                templateUrl : "root/taxes/taxes/account/_res/html/menu.html",
                controller:"accountMenuCtrl"
            }
        }
    }).state("root.taxes.taxes.account.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.taxes.taxes.account":{
                templateUrl : "root/taxes/taxes/account/add/_res/html/index.html",
                controller:'accountAddCtrl'
            }
        }
    }).state("root.taxes.taxes.account.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.taxes.taxes.account":{
                templateUrl : "root/taxes/taxes/account/edit/_res/html/index.html",
                controller:'accountEditCtrl'
            }
        }
    })
});