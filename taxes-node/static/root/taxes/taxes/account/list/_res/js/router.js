/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('accountList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.taxes.taxes.account.list",{
        url:"/list",
        views:{
            "content@root.taxes.taxes.account":{
                templateUrl : "root/taxes/taxes/account/list/_res/html/index.html",
                controller:'accountListCtrl'
            }
        }
    }).state("root.taxes.taxes.account.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.taxes.taxes.account.list":{
                templateUrl : "root/taxes/taxes/account/list/delete/_res/html/index.html",
                controller:'accountDeleteCtrl'
            }
        }
    })
});