/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('currencyList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.setting.currency.list",{
        url:"/list",
        views:{
            "content@root.initialize.setting.currency":{
                templateUrl : "root/initialize/setting/currency/list/_res/html/index.html",
                controller:'currencyListCtrl'
            }
        }
    }).state("root.initialize.setting.currency.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.setting.currency.list":{
                templateUrl : "root/initialize/setting/currency/list/delete/_res/html/index.html",
                controller:'currencyDeleteCtrl'
            }
        }
    })
});