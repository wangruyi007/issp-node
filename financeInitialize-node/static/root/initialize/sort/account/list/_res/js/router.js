/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('accountList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.account.list",{
        url:"/list",
        views:{
            "content@root.initialize.sort.account":{
                templateUrl : "root/initialize/sort/account/list/_res/html/index.html",
                controller:'accountListCtrl'
            }
        }
    }).state("root.initialize.sort.account.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.initialize.sort.account.list":{
                templateUrl : "root/initialize/sort/account/list/delete/_res/html/index.html",
                controller:'accountDeleteCtrl'
            }
        }
    })
});